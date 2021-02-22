import { docResponse } from '../components/doc-response'

export const singleMoviePath = {
  get: {
    tags: ['Filme'],
    summary: 'Exibir filme individual',
    parameters: [{
      in: 'path',
      name: 'id',
      required: true
    }],
    responses: {
      ...docResponse(200, 'Sucesso', 'listMovieResponse')
    }
  }
}
