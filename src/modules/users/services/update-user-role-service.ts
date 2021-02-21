import { ApiService } from '../../../shared/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../shared/helpers/http/protocols/http'
import { badRequest, ok, serverError } from '../../../shared/helpers/http/http-helper'
import { Validator } from '../../../shared/helpers/validators/protocols/validator'
import { getRepository } from 'typeorm'
import User from '../infra/typeorm/entities/user'
import { InvalidParamError } from '../../../shared/helpers/errors'
import Role from '../infra/typeorm/entities/role'

export class UpdateUserRoleService implements ApiService {
  constructor (private readonly validators: Validator) {}

  async execute (request: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validators.validate(request.body)
      if (error) {
        return badRequest(error)
      }
      const { id, roleId } = request.body
      const userRepository = getRepository(User)
      const user = await userRepository.findOne(id)

      if (!user) return badRequest(new Error('User not found'))

      if (roleId) {
        const roleRepository = getRepository(Role)
        const role = await roleRepository.findOne(roleId)
        if (!role) return badRequest(new Error('Role not found'))
        user.role = role
      } else if (roleId === null) {
        user.role = null
      } else {
        return badRequest(new InvalidParamError('role'))
      }

      await userRepository.save(user)
      ok(user)
      return Promise.resolve(undefined)
    } catch (error) {
      return serverError()
    }
  }
}
