import { RequiredFieldValidator, ValidatorComposite } from '../../../../shared/helpers/validators'
import { Validator } from '../../../../shared/helpers/validators/protocols/validator'

export const makeCreateVoteValitator = (): ValidatorComposite => {
  const validators: Validator[] = []
  for (const field of ['rate', 'movieId', 'userId']) {
    validators.push(new RequiredFieldValidator(field))
  }
  return new ValidatorComposite(validators)
}
