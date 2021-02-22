import { authPath } from './paths/auth-path'
import { authSchema } from './schemas/auth-schema'
import { loginBodySchema } from './schemas/login-body-schema'
import { moviePath } from './paths/movie-path'
import { movieBodySchema } from './schemas/movie-body-schema'
import { movieSchema } from './schemas/movie-schema'
import { nameBodySchema } from './schemas/name-body'
import { idNameBodySchema } from './schemas/id-name-schema'
import {genrePath} from "./paths/genre-path";
import {actorPath} from "./paths/actor-path";
import {directorPath} from "./paths/director-path";

export default {
  openapi: '3.0.0',
  info: {
    title: 'My Movie API',
    description: 'API para desafio Ioasys',
    version: '1.0.0'
  },
  servers: [
    { url: '/api' }
  ],
  tags: [{
    name: 'Autenticação'
  },
  {
    name: 'Usuário'
  },
  {
    name: 'Funções'
  },
  {
    name: 'Filme'
  },
  {
    name: 'Gênero'
  },
  {
    name: 'Ator'
  },
  {
    name: 'Diretor'
  }],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  paths: {
    '/auth': authPath,
    '/movie': moviePath,
    '/genre': genrePath,
    '/actor': actorPath,
    '/director': directorPath
  },
  schemas: {
    auth: authSchema,
    loginBody: loginBodySchema,
    movie: movieSchema,
    movieBody: movieBodySchema,
    nameBody: nameBodySchema,
    idNameBody: idNameBodySchema
  }
}
