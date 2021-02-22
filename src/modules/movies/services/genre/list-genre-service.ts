import { ApiService } from '../../../../shared/presentation/protocols/api-service'
import { HttpResponse } from '../../../../shared/presentation/helpers/http/protocols/http'
import { getRepository } from 'typeorm'
import Genre from '../../infra/typeorm/entities/genre'
import { ok, serverError } from '../../../../shared/presentation/helpers/http/http-helper'

export default class ListGenreService implements ApiService {
  async execute (): Promise<HttpResponse> {
    try {
      const genreRepository = getRepository(Genre)
      const genres = await genreRepository.find()
      return ok(genres)
    } catch (error) {
      return serverError()
    }
  }
}
