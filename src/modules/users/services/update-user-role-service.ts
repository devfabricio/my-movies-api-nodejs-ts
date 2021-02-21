import { ApiService } from '../../../shared/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../shared/helpers/http/protocols/http'
import { badRequest, ok } from '../../../shared/helpers/http/http-helper'
import { Validator } from '../../../shared/helpers/validators/protocols/validator'
import { getRepository } from 'typeorm'
import User from '../infra/typeorm/entities/user'
import { InvalidParamError } from '../../../shared/helpers/errors'
import { Roles } from '../../../shared/protocols/api-roles'

export class UpdateUserRoleService implements ApiService {
  constructor (private readonly validators: Validator) {}

  async execute (request: HttpRequest): Promise<HttpResponse> {
    const error = this.validators.validate(request.body)
    if (error) {
      return badRequest(error)
    }
    const { id, role } = request.body
    const userRepository = getRepository(User)
    const user = await userRepository.findOne(id)
    if (!user) {
      return badRequest(new Error('User not found'))
    }

    if (!(role in Roles) && role !== null) {
      return badRequest(new InvalidParamError('role'))
    }

    user.role = role
    await userRepository.save(user)
    ok(user)
    return Promise.resolve(undefined)
  }
}
