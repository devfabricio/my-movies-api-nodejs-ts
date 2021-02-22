import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const authPath = {
  post: {
    tags: ['Autenticação'],
    summary: 'Autenticação de Usuário',
    requestBody: docRequestBody('loginBody'),
    responses: {
      ...docResponse(200, 'Sucesso', 'auth')
    }
  }
}
