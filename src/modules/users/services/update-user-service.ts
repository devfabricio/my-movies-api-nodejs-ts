import { ApiService } from '../../../shared/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../shared/helpers/http/protocols/http'
import { badRequest, ok, serverError } from '../../../shared/helpers/http/http-helper'
import { Validator } from '../../../shared/helpers/validators/protocols/validator'
import { Encrypter } from '../../../shared/utils/adapters/protocols/encrypter'
import { getRepository } from 'typeorm'
import User from '../infra/typeorm/entities/user'
import { MissingParamError } from '../../../shared/helpers/errors'

export default class UpdateUserService implements ApiService {
  constructor (private readonly validators: Validator,
    private readonly passwordEncrypter: Encrypter) {}

  async execute (request?: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validators.validate(request.body)
      if (error) {
        return badRequest(error)
      }
      const { id, name, email, currentPassword, password } = request.body

      const userRepository = getRepository(User)
      const user = await userRepository.findOne(id)
      if (!user) {
        return badRequest(new Error('User not found'))
      }

      user.name = name
      user.email = email

      if (password) {
        if (!currentPassword) return badRequest(new MissingParamError('currentPassword'))
        const currentPasswordIsValid = await this.passwordEncrypter.compare(currentPassword, user.password)
        if (!currentPasswordIsValid) return badRequest(new Error('Current Password Incorrect'))
        user.password = await this.passwordEncrypter.encrypt(password)
      }

      await userRepository.save(user)
      delete user.password
      return ok(user)
    } catch (error) {
      return serverError()
    }
  }
}
