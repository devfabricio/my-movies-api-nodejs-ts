import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const genrePath = {
  get: {
    tags: ['Gênero'],
    summary: 'Listar Gêneros - Autenticação não é Necessária',
    responses: {
      ...docResponse(200, 'Sucesso', 'idNameArrayBody')
    }
  },
  post: {
    tags: ['Gênero'],
    summary: 'Cadastrar Novo Gênero - Autenticação Necessária - Permissão para Administradores',
    security: [{
      bearerAuth: []
    }],
    requestBody: docRequestBody('nameBody'),
    responses: {
      ...docResponse(201, 'Sucesso', 'idNameBody')
    }
  }
}
