import { ApiService } from '../../../../shared/presentation/protocols/api-service'
import { HttpResponse } from '../../../../shared/presentation/helpers/http/protocols/http'
import { getRepository } from 'typeorm'
import { ok, serverError } from '../../../../shared/presentation/helpers/http/http-helper'
import Actor from '../../infra/typeorm/entities/actor'

export default class ListActorService implements ApiService {
  async execute (): Promise<HttpResponse> {
    try {
      const actorRepository = getRepository(Actor)
      const actors = await actorRepository.find()
      return ok(actors)
    } catch (error) {
      return serverError()
    }
  }
}
