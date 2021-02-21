import { ApiService } from '../../../shared/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../shared/helpers/http/protocols/http'
import { Validator } from '../../../shared/helpers/validators/protocols/validator'
import { badRequest, ok, serverError } from '../../../shared/helpers/http/http-helper'
import { getRepository } from 'typeorm'
import User from '../infra/typeorm/entities/user'
import { InvalidParamError } from '../../../shared/helpers/errors'

export default class UpdateUserActivationService implements ApiService {
  constructor (private readonly validators: Validator) {}

  async execute (request: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validators.validate(request.body)
      if (error) {
        return badRequest(error)
      }
      const { id, activation } = request.body

      const userRepository = getRepository(User)
      const user = await userRepository.findOne(id)
      if (!user) {
        return badRequest(new Error('User not found'))
      }

      if (activation !== 'active' && activation !== 'inactive') {
        return badRequest(new InvalidParamError('activation'))
      }

      user.activation = activation
      await userRepository.save(user)
      ok(user)
    } catch (error) {
      return serverError()
    }
  }
}
