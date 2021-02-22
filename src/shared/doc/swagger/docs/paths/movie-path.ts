import { docRequestBody } from '../components/doc-request-body'
import { docResponse } from '../components/doc-response'

export const moviePath = {
  get: {
    tags: ['Filme'],
    summary: 'Listar filmes - Autenticação não é Necessária',
    parameters: [{
      in: 'query',
      name: 'genre',
      description: 'Filtrar por ID do gênero'
    },
    {
      in: 'query',
      name: 'actor',
      description: 'Filtrar por ID do ator'
    },
    {
      in: 'query',
      name: 'director',
      description: 'Filtrar por ID do diretor'
    },
    {
      in: 'query',
      name: 'title',
      description: 'Buscar por título semelhante'
    }],
    responses: {
      ...docResponse(200, 'Sucesso', 'listMovieResponse')
    }
  },
  post: {
    tags: ['Filme'],
    summary: 'Cadastrar Novo Filme - Autenticação Necessária - Permissão para Administradores',
    security: [{
      bearerAuth: []
    }],
    requestBody: docRequestBody('createMovieRequest'),
    responses: {
      ...docResponse(201, 'Sucesso', 'createMovieResponse')
    }
  }
}
