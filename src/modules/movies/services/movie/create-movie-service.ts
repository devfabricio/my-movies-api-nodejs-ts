import { ApiService } from '../../../../shared/presentation/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../../shared/presentation/helpers/http/protocols/http'
import { Validator } from '../../../../shared/presentation/helpers/validators/protocols/validator'
import { badRequest, created, serverError, unauthorized } from '../../../../shared/presentation/helpers/http/http-helper'
import { getRepository } from 'typeorm'
import Movie from '../../infra/typeorm/entities/movie'
import Genre from '../../infra/typeorm/entities/genre'
import Actor from '../../infra/typeorm/entities/actor'
import Director from '../../infra/typeorm/entities/director'
import User from '../../../users/infra/typeorm/entities/user'
import { Roles } from '../../../../shared/presentation/protocols/api-roles'

type MovieData = {
  title: string
  overview: string
  releaseDate: string
  posterPath: string
  voteAverage: number
  genres: Genre[]
  actors: Actor[]
  directors: Director[]
}

export default class CreateMovieService implements ApiService {
  constructor (private readonly validators: Validator) {}

  async execute (request: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validators.validate(request.body)
      if (error) {
        return badRequest(error)
      }
      const { title, overview, releaseDate, posterPath, genresIds, actorsIds, directorsIds, userId } = request.body

      const userRepository = getRepository(User)
      const user = await userRepository.findOne({
        where: { id: userId }, relations: ['role']
      })

      if (!user.role) {
        return unauthorized()
      }

      if (user.role.name !== Roles.ADMINISTRATOR) {
        return unauthorized()
      }

      const movieRepository = getRepository(Movie)
      const genreRepository = getRepository(Genre)
      const actorRepository = getRepository(Actor)
      const directorRepository = getRepository(Director)

      const genres: Genre[] = []

      for (const genreId of genresIds) {
        const genre: Genre = await genreRepository.findOne(genreId)
        genres.push(genre)
      }

      const actors: Actor[] = []

      for (const actorId of actorsIds) {
        const actor: Actor = await actorRepository.findOne(actorId)
        actors.push(actor)
      }

      const directors: Director[] = []

      for (const directorId of directorsIds) {
        const director: Director = await directorRepository.findOne(directorId)
        directors.push(director)
      }

      const movieData: MovieData = { title, overview, releaseDate, posterPath, voteAverage: 0, genres, actors, directors }
      const movie = movieRepository.create(movieData)

      await movieRepository.save(movie)

      return created('Movie', movie.id)
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
