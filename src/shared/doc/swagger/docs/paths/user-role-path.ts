import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const userRolePath = {
  put: {
    tags: ['Funções'],
    summary: 'Alterar função de usuário',
    security: [{
      bearerAuth: []
    }],
    requestBody: docRequestBody('updateRole'),
    responses: {
      ...docResponse(201, 'Sucesso', 'successfulMessage')
    }
  }
}
