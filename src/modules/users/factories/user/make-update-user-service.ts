import UpdateUserService from '../../services/update-user-service'
import { makeUpdateUserValidator } from './make-update-user-validator'
import { PasswordEncrypterAdapter } from '../../../../shared/infra/adapters/password-encrypter-adapter'

export const makeUpdateUserService = (): UpdateUserService => {
  const validator = makeUpdateUserValidator()
  const encrypter = new PasswordEncrypterAdapter()
  return new UpdateUserService(validator, encrypter)
}
