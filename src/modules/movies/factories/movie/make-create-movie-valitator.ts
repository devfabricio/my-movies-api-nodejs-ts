import { RequiredFieldValidator, ValidatorComposite } from '../../../../shared/presentation/helpers/validators'
import { Validator } from '../../../../shared/presentation/helpers/validators/protocols/validator'

export const makeCreateMovieValitator = (): ValidatorComposite => {
  const validators: Validator[] = []
  for (const field of ['title', 'overview', 'releaseDate', 'posterPath',
    'genresIds', 'actorsIds', 'directorsIds', 'userId']) {
    validators.push(new RequiredFieldValidator(field))
  }
  return new ValidatorComposite(validators)
}
