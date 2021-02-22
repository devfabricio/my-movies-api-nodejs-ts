import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const userRolePath = {
  put: {
    tags: ['Funções'],
    summary: 'Alterar Função de Usuário - Autenticação Necessária - Permissão para Administradores',
    security: [{
      bearerAuth: []
    }],
    requestBody: docRequestBody('updateRole'),
    responses: {
      ...docResponse(201, 'Sucesso', 'successfulMessage')
    }
  }
}
