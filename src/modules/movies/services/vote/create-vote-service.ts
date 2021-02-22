import { ApiService } from '../../../../shared/presentation/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../../shared/presentation/helpers/http/protocols/http'
import { Validator } from '../../../../shared/presentation/helpers/validators/protocols/validator'
import { badRequest, created, serverError } from '../../../../shared/presentation/helpers/http/http-helper'
import { getRepository } from 'typeorm'
import Vote from '../../infra/typeorm/entities/vote'
import Movie from '../../infra/typeorm/entities/movie'
import User from '../../../users/infra/typeorm/entities/user'
import { InvalidParamError } from '../../../../shared/presentation/helpers/errors'

type VoteData = {
  rate: number
  movie: Movie
  user: User
}

export default class CreateVoteService implements ApiService {
  constructor (private readonly validators: Validator) {}

  async execute (request: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validators.validate(request.body)
      if (error) {
        return badRequest(error)
      }
      const voteRepository = getRepository(Vote)
      const movieRepository = getRepository(Movie)
      const userRepository = getRepository(User)

      const { rate, movieId, userId } = request.body

      if (rate > 4 || rate < 0 || typeof rate !== 'number') {
        return badRequest(new InvalidParamError('rate'))
      }

      const movie = await movieRepository.findOne(movieId)
      if (!movie) {
        return badRequest(new InvalidParamError('movieId'))
      }

      const user = await userRepository.findOne(userId)
      if (!user) {
        return badRequest(new InvalidParamError('userId'))
      }

      const checkIfUserVoted = await voteRepository.findOne({
        movie: movie, user: user
      })

      if (checkIfUserVoted) {
        return badRequest(new Error('User already voted in this movie'))
      }

      const voteData: VoteData = { rate, movie, user }
      const vote = voteRepository.create(voteData)

      await voteRepository.save(vote)

      const avgMovieVotes = await voteRepository.createQueryBuilder('vote')
        .where('vote.movieId = :movieId', { movieId })
        .select('AVG(vote.rate)', 'average')
        .getRawOne()

      movie.voteAverage = Number((+avgMovieVotes.average).toFixed(1))
      await movieRepository.save(movie)

      return created('Vote', vote.id)
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
