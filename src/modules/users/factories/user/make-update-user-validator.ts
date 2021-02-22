import {
  CompareFieldsValidator,
  EmailValidator,
  RequiredFieldValidator,
  ValidatorComposite
} from '../../../../shared/presentation/helpers/validators'
import { Validator } from '../../../../shared/presentation/helpers/validators/protocols/validator'
import { EmailValidationAdapter } from '../../../../shared/infra/adapters/email-validation-adapter'

export const makeUpdateUserValidator = (): ValidatorComposite => {
  const validators: Validator[] = []
  for (const field of ['id', 'name', 'email']) {
    validators.push(new RequiredFieldValidator(field))
  }
  validators.push(new EmailValidator('email', new EmailValidationAdapter()))
  validators.push(new CompareFieldsValidator('password', 'passwordConfirmation'))
  return new ValidatorComposite(validators)
}
