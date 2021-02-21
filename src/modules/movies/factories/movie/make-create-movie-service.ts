import { makeCreateMovieValitator } from './make-create-movie-valitator'
import CreateMovieService from '../../services/movie/create-movie-service'

export const makeCreateMovieService = (): CreateMovieService => {
  const validator = makeCreateMovieValitator()
  return new CreateMovieService(validator)
}
