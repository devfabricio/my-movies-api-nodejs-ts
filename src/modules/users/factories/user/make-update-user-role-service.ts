import { UpdateUserRoleService } from '../../services/update-user-role-service'
import { makeUpdateUserRoleValidator } from './make-update-user-role-validator'

export const makeUpdateUserRoleService = (): UpdateUserRoleService => {
  const validator = makeUpdateUserRoleValidator()
  return new UpdateUserRoleService(validator)
}
