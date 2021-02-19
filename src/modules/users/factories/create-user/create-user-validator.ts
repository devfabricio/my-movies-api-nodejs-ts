import {
  CompareFieldsValidator,
  EmailValidator,
  RequiredFieldValidator,
  ValidatorComposite
} from '../../../../shared/helpers/validators'
import { Validator } from '../../../../shared/helpers/validators/protocols/validator'
import { EmailValidationAdapter } from '../../../../shared/utils/adapters/email-validation-adapter'

export const createUserValidator = (): ValidatorComposite => {
  const validators: Validator[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validators.push(new RequiredFieldValidator(field))
  }
  validators.push(new EmailValidator('email', new EmailValidationAdapter()))
  validators.push(new CompareFieldsValidator('email', 'passwordConfirmation'))
  return new ValidatorComposite(validators)
}
