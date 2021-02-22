import { ApiService } from '../../../../shared/presentation/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../../shared/presentation/helpers/http/protocols/http'
import { getRepository } from 'typeorm'
import Movie from '../../infra/typeorm/entities/movie'
import { badRequest, ok, serverError } from '../../../../shared/presentation/helpers/http/http-helper'

export default class ShowMovieService implements ApiService {
  async execute (request: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = request.params
      const movieRepository = getRepository(Movie)
      const movie = await movieRepository.findOne(id)
      if (!movie) {
        return badRequest(new Error('Movie not found'))
      }
      return ok(movie)
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
