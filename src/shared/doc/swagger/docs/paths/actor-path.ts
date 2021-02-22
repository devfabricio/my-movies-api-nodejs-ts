import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const actorPath = {
  get: {
    tags: ['Ator'],
    summary: 'Listar Atores - Autenticação não é Necessária',
    responses: {
      ...docResponse(200, 'Sucesso', 'idNameArrayBody')
    }
  },
  post: {
    tags: ['Ator'],
    summary: 'Cadastrar Novo Ator - Autenticação Necessária - Permissão para Administradores',
    security: [{
      bearerAuth: []
    }],
    requestBody: docRequestBody('nameBody'),
    responses: {
      ...docResponse(201, 'Sucesso', 'idNameBody')
    }
  }
}
