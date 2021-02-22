import { ApiService } from '../../../../shared/presentation/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../../shared/presentation/helpers/http/protocols/http'
import { Validator } from '../../../../shared/presentation/helpers/validators/protocols/validator'
import { badRequest, created, serverError } from '../../../../shared/presentation/helpers/http/http-helper'
import { getRepository } from 'typeorm'
import Actor from '../../infra/typeorm/entities/actor'

type ActorData = {
  name: string
}

export default class CreateActorService implements ApiService {
  constructor (private readonly validators: Validator) {}

  async execute (request: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validators.validate(request.body)
      if (error) {
        return badRequest(error)
      }
      const actorRepository = getRepository(Actor)
      const { name } = request.body
      const actorData: ActorData = { name }
      const actor = actorRepository.create(actorData)

      await actorRepository.save(actor)

      return created('Actor', actor.id)
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
