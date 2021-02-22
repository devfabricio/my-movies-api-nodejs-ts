import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const actorPath = {
  post: {
    tags: ['Ator'],
    summary: 'Atores de um Filme',
    security: [{
      bearerAuth: []
    }],
    requestBody: docRequestBody('nameBody'),
    responses: {
      ...docResponse(201, 'Sucesso', 'idNameBody')
    }
  }
}
