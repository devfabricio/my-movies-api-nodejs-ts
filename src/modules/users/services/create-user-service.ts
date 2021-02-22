import { HttpRequest, HttpResponse } from '../../../shared/presentation/helpers/http/protocols/http'
import { Validator } from '../../../shared/presentation/helpers/validators/protocols/validator'
import { badRequest, created, serverError } from '../../../shared/presentation/helpers/http/http-helper'
import { getRepository } from 'typeorm'
import User from '../infra/typeorm/entities/user'
import { Encrypter } from '../../../shared/infra/adapters/protocols/encrypter'
import { ApiService } from '../../../shared/presentation/protocols/api-service'

type UserData = {
  name: string
  email: string
  password: string
  activation: 'active' | 'inactive'
}

export class CreateUserService implements ApiService {
  constructor (private readonly validators: Validator,
    private readonly passwordEncrypter: Encrypter) {}

  public async execute (request: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validators.validate(request.body)
      if (error) {
        return badRequest(error)
      }
      const userRepository = getRepository(User)
      const body = request.body
      const checkIfEmailIsUsed = await userRepository.findOne({ where: { email: body.email } })
      if (checkIfEmailIsUsed) {
        return badRequest(new Error('Email address already used'))
      }
      const hashedPassword = await this.passwordEncrypter.encrypt(body.password)
      const userData: UserData = {
        name: body.name,
        email: body.email,
        password: hashedPassword,
        activation: 'active'
      }
      const user = userRepository.create(userData)
      await userRepository.save(user)

      delete user.password
      delete user.activation
      return created('User', user.id)
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
