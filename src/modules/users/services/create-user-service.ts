import { HttpRequest, HttpResponse } from '../../../shared/helpers/http/protocols/http'
import { Validator } from '../../../shared/helpers/validators/protocols/validator'
import { badRequest, created, serverError } from '../../../shared/helpers/http/http-helper'
import { getRepository } from 'typeorm'
import User from '../infra/typeorm/entities/user'
import { Encrypter } from '../../../shared/utils/adapters/protocols/encrypter'

type UserData = {
  name: string
  email: string
  password: string
  isAdmin: boolean
  activation: number
}

export class CreateUserService {
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
        activation: 1,
        isAdmin: false
      }
      const user = userRepository.create(userData)
      await userRepository.save(user)
      return created(user)
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
