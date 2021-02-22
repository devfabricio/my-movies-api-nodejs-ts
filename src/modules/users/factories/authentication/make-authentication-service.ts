import { AuthenticationService } from '../../services/authentication-service'
import { makeAuthenticationValidator } from './make-authentication-validator'
import { PasswordEncrypterAdapter } from '../../../../shared/infra/adapters/password-encrypter-adapter'

export const makeAuthenticationService = (): AuthenticationService => {
  const validator = makeAuthenticationValidator()
  const encrypter = new PasswordEncrypterAdapter()
  return new AuthenticationService(validator, encrypter)
}
