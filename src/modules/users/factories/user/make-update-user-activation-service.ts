import UpdateUserActivationService from '../../services/update-user-activation-service'
import { makeUpdateUserActivationValidator } from './make-update-user-activation-validator'

export const makeUpdateUserActivationService = (): UpdateUserActivationService => {
  const validator = makeUpdateUserActivationValidator()
  return new UpdateUserActivationService(validator)
}
