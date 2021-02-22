import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const userPath = {
  post: {
    tags: ['Usuário'],
    summary: 'Cadastrar Novo Usuário - Autenticação não é Necessária',
    requestBody: docRequestBody('createUser'),
    responses: {
      ...docResponse(201, 'Sucesso', 'successfulMessage')
    }
  },
  put: {
    tags: ['Usuário'],
    summary: 'Editar usuário - Autenticação Necessária',
    security: [{
      bearerAuth: []
    }],
    requestBody: docRequestBody('updateUser'),
    responses: {
      ...docResponse(201, 'Sucesso', 'successfulMessage')
    }
  }
}
