import { ApiService } from '../../../../shared/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../../shared/helpers/http/protocols/http'
import { Validator } from '../../../../shared/helpers/validators/protocols/validator'
import { badRequest, created, serverError } from '../../../../shared/helpers/http/http-helper'
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

      return created(actor)
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
