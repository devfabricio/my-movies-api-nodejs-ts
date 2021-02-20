import { makeCreateDirectorValitator } from './make-create-director-valitator'
import CreateDirectorService from '../../../services/director/create-director-service'

export const makeCreateDirectorService = (): CreateDirectorService => {
  const validator = makeCreateDirectorValitator()
  return new CreateDirectorService(validator)
}
