import { HttpRequest, HttpResponse } from '../../../shared/helpers/http/protocols/http'
import { Validator } from '../../../shared/helpers/validators/protocols/validator'
import { badRequest, created, serverError } from '../../../shared/helpers/http/http-helper'
import { getRepository } from 'typeorm'
import User from '../infra/typeorm/entities/user'

export class CreateUserService {
  constructor (private readonly validators: Validator) {}

  public async execute (request: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validators.validate(request.body)
      if (error) {
        return badRequest(error)
      }
      const userRepository = getRepository(User)
      const body = request.body
      const checkIfEmailIsUsed = await userRepository.find({ where: { email: body.email } })
      if (checkIfEmailIsUsed) {
        return badRequest(new Error('Email address already used'))
      }
      const user = userRepository.create(body)
      await userRepository.save(user)
      return created(user)
    } catch (error) {
      return serverError()
    }
  }
}
