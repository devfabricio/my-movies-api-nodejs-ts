import { ApiService } from '../../../../shared/presentation/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../../shared/presentation/helpers/http/protocols/http'
import { getCustomRepository } from 'typeorm'
import { ok } from '../../../../shared/presentation/helpers/http/http-helper'
import MovieRepository from '../../infra/typeorm/repositories/movie-repository'

export default class ListMovieService implements ApiService {
  async execute (request: HttpRequest): Promise<HttpResponse> {
    const queries = request.queries
    const moviesRepository = getCustomRepository(MovieRepository)

    let findMovies = moviesRepository.find()

    if (queries) {
      findMovies = moviesRepository.findByFilters(queries)
    }

    const movies = await findMovies

    return ok(movies)
  }
}
