import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const genrePath = {
  post: {
    tags: ['Gênero'],
    summary: 'Gêneros de um Filme',
    security: [{
      bearerAuth: []
    }],
    requestBody: docRequestBody('nameBody'),
    responses: {
      ...docResponse(201, 'Sucesso', 'idNameBody')
    }
  }
}
