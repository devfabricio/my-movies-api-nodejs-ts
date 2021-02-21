import { CreateUserService } from '../../services/create-user-service'
import { makeCreateUserValidator } from './make-create-user-validator'
import { PasswordEncrypterAdapter } from '../../../../shared/utils/adapters/password-encrypter-adapter'

export const makeCreateUserService = (): CreateUserService => {
  const validator = makeCreateUserValidator()
  const encrypter = new PasswordEncrypterAdapter()
  return new CreateUserService(validator, encrypter)
}
