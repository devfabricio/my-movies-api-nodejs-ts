import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const votePath = {
  post: {
    tags: ['Voto'],
    summary: 'Cadastrar Novo Voto - Autenticação Necessária - Permissão para Usuários Comuns',
    security: [{
      bearerAuth: []
    }],
    requestBody: docRequestBody('createVote'),
    responses: {
      ...docResponse(201, 'Sucesso', 'idNameBody')
    }
  }
}
