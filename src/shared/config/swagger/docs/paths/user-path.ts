import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const userPath = {
  post: {
    tags: ['Usuário'],
    summary: 'Criar novo usuário',
    requestBody: docRequestBody('createUser'),
    responses: {
      ...docResponse(201, 'Sucesso', 'successfulMessage')
    }
  },
  put: {
    tags: ['Usuário'],
    summary: 'Editar usuário',
    requestBody: docRequestBody('updateUser'),
    responses: {
      ...docResponse(201, 'Sucesso', 'successfulMessage')
    }
  }
}
