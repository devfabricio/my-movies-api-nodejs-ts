import { ApiService } from '../../../../shared/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../../shared/helpers/http/protocols/http'
import { Validator } from '../../../../shared/helpers/validators/protocols/validator'
import { badRequest, created, serverError } from '../../../../shared/helpers/http/http-helper'
import { getRepository } from 'typeorm'
import Vote from '../../infra/typeorm/entities/vote'
import Movie from '../../infra/typeorm/entities/movie'
import User from '../../../users/infra/typeorm/entities/user'
import { InvalidParamError } from '../../../../shared/helpers/errors'

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

      if (rate > 4 && rate < 0 && typeof rate !== 'number') {
        return badRequest(new InvalidParamError('rate'))
      }

      const movie = await movieRepository.findOne(movieId)
      if (!movie) {
        return badRequest(new InvalidParamError('movie'))
      }

      const user = await userRepository.findOne(userId)
      if (!user) {
        return badRequest(new InvalidParamError('user'))
      }

      const voteData: VoteData = { rate, movie, user }
      const vote = voteRepository.create(voteData)

      await voteRepository.save(vote)

      return created(vote)
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
