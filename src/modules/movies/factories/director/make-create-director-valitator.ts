import { RequiredFieldValidator, ValidatorComposite } from '../../../../shared/presentation/helpers/validators'
import { Validator } from '../../../../shared/presentation/helpers/validators/protocols/validator'

export const makeCreateDirectorValitator = (): ValidatorComposite => {
  const validators: Validator[] = []
  for (const field of ['name']) {
    validators.push(new RequiredFieldValidator(field))
  }
  return new ValidatorComposite(validators)
}
