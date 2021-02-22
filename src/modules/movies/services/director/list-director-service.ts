import { ApiService } from '../../../../shared/protocols/api-service'
import { HttpResponse } from '../../../../shared/helpers/http/protocols/http'
import { getRepository } from 'typeorm'
import { ok, serverError } from '../../../../shared/helpers/http/http-helper'
import Director from '../../infra/typeorm/entities/director'

export default class ListDirectorService implements ApiService {
  async execute (): Promise<HttpResponse> {
    try {
      const directorRepository = getRepository(Director)
      const directors = await directorRepository.find()
      return ok(directors)
    } catch (error) {
      return serverError()
    }
  }
}
