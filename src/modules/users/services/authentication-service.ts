import { sign } from 'jsonwebtoken'
import { ApiService } from '../../../shared/presentation/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../shared/presentation/helpers/http/protocols/http'
import { getRepository } from 'typeorm'
import User from '../infra/typeorm/entities/user'
import { badRequest, ok, unauthorized } from '../../../shared/presentation/helpers/http/http-helper'
import { Validator } from '../../../shared/presentation/helpers/validators/protocols/validator'
import { Encrypter } from '../../../shared/infra/adapters/protocols/encrypter'

export class AuthenticationService implements ApiService {
  constructor (private readonly validators: Validator,
    private readonly passwordEncrypter: Encrypter) {}

  async execute (request: HttpRequest): Promise<HttpResponse> {
    const error = this.validators.validate(request.body)
    if (error) {
      return badRequest(error)
    }

    const { email, password } = request.body

    const userRepository = getRepository(User)
    const user = await userRepository.findOne({
      where: { email }
    })

    if (!user) {
      return unauthorized()
    }
    const passwordIsValid = await this.passwordEncrypter.compare(password, user.password)
    if (!passwordIsValid) {
      return unauthorized()
    }

    const token = sign({ uid: user.id }, process.env.SECRET_KEY, {
      subject: user.id,
      expiresIn: '30d'
    })

    return ok({ accessToken: token })
  }
}
