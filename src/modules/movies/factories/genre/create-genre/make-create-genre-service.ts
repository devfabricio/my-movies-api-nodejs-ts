import CreateGenreService from '../../../services/genre/create-genre-service'
import { makeCreateGenreValitator } from './make-create-genre-valitator'

export const makeCreateGenreService = (): CreateGenreService => {
  const validator = makeCreateGenreValitator()
  return new CreateGenreService(validator)
}
