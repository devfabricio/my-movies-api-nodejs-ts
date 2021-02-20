import { ApiService } from '../../../../shared/protocols/api-service'
import { HttpResponse } from '../../../../shared/helpers/http/protocols/http'
import { getRepository } from 'typeorm'
import Movie from '../../infra/typeorm/entities/movie'
import { ok } from '../../../../shared/helpers/http/http-helper'

export default class ListMovieService implements ApiService {
  async execute (): Promise<HttpResponse> {
    const moviesRepository = getRepository(Movie)
    const movies = await moviesRepository.find()
    return ok(movies)
  }
}
