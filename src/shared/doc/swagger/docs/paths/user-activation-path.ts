import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const userActivationPath = {
  put: {
    tags: ['Usuário'],
    summary: 'Ativar/Desativar usuário - Autenticação Necessária - Permissão para Administradores',
    security: [{
      bearerAuth: []
    }],
    requestBody: docRequestBody('updateUserActivation'),
    responses: {
      ...docResponse(201, 'Sucesso', 'successfulMessage')
    }
  }
}
