import { ApiService } from '../../../../shared/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../../shared/helpers/http/protocols/http'
import { Validator } from '../../../../shared/helpers/validators/protocols/validator'
import { badRequest, created, serverError } from '../../../../shared/helpers/http/http-helper'
import { getRepository } from 'typeorm'
import Movie from '../../infra/typeorm/entities/movie'
import Genre from '../../infra/typeorm/entities/genre'
import Actor from '../../infra/typeorm/entities/actor'
import Director from '../../infra/typeorm/entities/director'

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
      const movieRepository = getRepository(Movie)
      const genreRepository = getRepository(Genre)
      const actorRepository = getRepository(Actor)
      const directorRepository = getRepository(Director)
      const { title, overview, releaseDate, posterPath, voteAverage, genresIds, actorsIds, directorsIds } = request.body

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

      const movieData: MovieData = { title, overview, releaseDate, posterPath, voteAverage, genres, actors, directors }
      const movie = movieRepository.create(movieData)

      await movieRepository.save(movie)

      return created(movie)
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
