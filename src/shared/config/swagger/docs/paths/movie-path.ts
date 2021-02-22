import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const moviePath = {
  post: {
    tags: ['Filme'],
    summary: 'Criação de Filme',
    security: [{
      bearerAuth: []
    }],
    requestBody: docRequestBody('movieBody'),
    responses: {
      ...docResponse(201, 'Sucesso', 'movie')
    }
  }
}
