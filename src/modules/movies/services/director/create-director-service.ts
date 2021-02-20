import { ApiService } from '../../../../shared/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../../shared/helpers/http/protocols/http'
import { Validator } from '../../../../shared/helpers/validators/protocols/validator'
import { badRequest, created, serverError } from '../../../../shared/helpers/http/http-helper'
import { getRepository } from 'typeorm'
import Director from '../../infra/typeorm/entities/director'

type DirectorData = {
  name: string
}

export default class CreateDirectorService implements ApiService {
  constructor (private readonly validators: Validator) {}

  async execute (request: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validators.validate(request.body)
      if (error) {
        return badRequest(error)
      }
      const directorRepository = getRepository(Director)
      const { name } = request.body
      const directorData: DirectorData = { name }
      const director = directorRepository.create(directorData)

      await directorRepository.save(director)

      return created(director)
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
