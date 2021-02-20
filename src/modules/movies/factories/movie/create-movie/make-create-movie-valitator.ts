import { RequiredFieldValidator, ValidatorComposite } from '../../../../../shared/helpers/validators'
import { Validator } from '../../../../../shared/helpers/validators/protocols/validator'

export const makeCreateMovieValitator = (): ValidatorComposite => {
  const validators: Validator[] = []
  for (const field of ['title', 'overview', 'releaseDate', 'posterPath', 'voteAverage',
    'genresIds', 'actorsIds', 'directorsIds']) {
    validators.push(new RequiredFieldValidator(field))
  }
  return new ValidatorComposite(validators)
}
