import { ApiService } from '../../../../shared/presentation/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../../shared/presentation/helpers/http/protocols/http'
import { Validator } from '../../../../shared/presentation/helpers/validators/protocols/validator'
import { badRequest, created, serverError } from '../../../../shared/presentation/helpers/http/http-helper'
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

      return created('Director', director.id)
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
