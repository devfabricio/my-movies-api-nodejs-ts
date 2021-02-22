import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const votePath = {
  post: {
    tags: ['Voto'],
    summary: 'Votar em um filme',
    security: [{
      bearerAuth: []
    }],
    requestBody: docRequestBody('createVote'),
    responses: {
      ...docResponse(201, 'Sucesso', 'idNameBody')
    }
  }
}
