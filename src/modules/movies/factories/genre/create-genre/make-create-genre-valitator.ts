import { RequiredFieldValidator, ValidatorComposite } from '../../../../../shared/helpers/validators'
import { Validator } from '../../../../../shared/helpers/validators/protocols/validator'

export const makeCreateGenreValitator = (): ValidatorComposite => {
  const validators: Validator[] = []
  for (const field of ['name']) {
    validators.push(new RequiredFieldValidator(field))
  }
  return new ValidatorComposite(validators)
}
