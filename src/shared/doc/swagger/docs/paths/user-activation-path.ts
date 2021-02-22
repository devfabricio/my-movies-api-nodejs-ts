import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const userActivationPath = {
  put: {
    tags: ['Usuário'],
    summary: 'Ativar/Desativar usuário',
    security: [{
      bearerAuth: []
    }],
    requestBody: docRequestBody('updateUserActivation'),
    responses: {
      ...docResponse(201, 'Sucesso', 'successfulMessage')
    }
  }
}
