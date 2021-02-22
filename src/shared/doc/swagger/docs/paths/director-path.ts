import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const directorPath = {
  get: {
    tags: ['Diretor'],
    summary: 'Listar Diretores - Autenticação não é Necessária',
    responses: {
      ...docResponse(200, 'Sucesso', 'idNameArrayBody')
    }
  },
  post: {
    tags: ['Diretor'],
    summary: 'Cadastrar Novo Diretor - Autenticação Necessária - Permissão para Administradores',
    security: [{
      bearerAuth: []
    }],
    requestBody: docRequestBody('nameBody'),
    responses: {
      ...docResponse(201, 'Sucesso', 'idNameBody')
    }
  }
}
