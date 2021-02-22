import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const genrePath = {
  get: {
    tags: ['Gênero'],
    summary: 'Listar gêneros cadastrados',
    responses: {
      ...docResponse(200, 'Sucesso', 'idNameArrayBody')
    }
  },
  post: {
    tags: ['Gênero'],
    summary: 'Criar gêneros de um Filme',
    security: [{
      bearerAuth: []
    }],
    requestBody: docRequestBody('nameBody'),
    responses: {
      ...docResponse(201, 'Sucesso', 'idNameBody')
    }
  }
}
