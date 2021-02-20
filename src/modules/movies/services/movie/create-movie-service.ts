import { ApiService } from '../../../../shared/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../../shared/helpers/http/protocols/http'
import { Validator } from '../../../../shared/helpers/validators/protocols/validator'
import { badRequest, created, serverError } from '../../../../shared/helpers/http/http-helper'
import { getRepository } from 'typeorm'
import Movie from '../../infra/typeorm/entities/movie'

type MovieData = {
  title: string
  overview: string
  releaseDate: string
  posterPath: string
  voteAverage: number
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
      const { title, overview, releaseDate, posterPath, voteAverage } = request.body
      const movieData: MovieData = { title, overview, releaseDate, posterPath, voteAverage }
      const movie = movieRepository.create(movieData)

      await movieRepository.save(movie)

      return created(movie)
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
