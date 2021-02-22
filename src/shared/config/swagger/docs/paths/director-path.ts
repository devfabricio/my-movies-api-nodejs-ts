import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const directorPath = {
  post: {
    tags: ['Diretor'],
    summary: 'Diretores de um Filme',
    security: [{
      bearerAuth: []
    }],
    requestBody: docRequestBody('nameBody'),
    responses: {
      ...docResponse(201, 'Sucesso', 'idNameBody')
    }
  }
}
