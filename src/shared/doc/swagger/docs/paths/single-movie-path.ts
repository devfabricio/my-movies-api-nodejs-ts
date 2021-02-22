import { docResponse } from '../components/doc-response'

export const singleMoviePath = {
  get: {
    tags: ['Filme'],
    summary: 'Exibir Detalhes do Filme - Autenticação não é Necessária',
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
