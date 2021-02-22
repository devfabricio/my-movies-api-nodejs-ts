import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const actorPath = {
  get: {
    tags: ['Ator'],
    summary: 'Listar atores cadastrados',
    responses: {
      ...docResponse(200, 'Sucesso', 'idNameArrayBody')
    }
  },
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
