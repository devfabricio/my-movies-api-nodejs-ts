import { ApiService } from '../../../shared/presentation/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../shared/presentation/helpers/http/protocols/http'
import { Validator } from '../../../shared/presentation/helpers/validators/protocols/validator'
import {badRequest, ok, serverError, updated} from '../../../shared/presentation/helpers/http/http-helper'
import { getRepository } from 'typeorm'
import User from '../infra/typeorm/entities/user'
import { InvalidParamError } from '../../../shared/presentation/helpers/errors'

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
      return updated('User activation', user.id)
    } catch (error) {
      return serverError()
    }
  }
}
