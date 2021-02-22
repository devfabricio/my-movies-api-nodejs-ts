import { authPath } from './paths/auth-path'
import { authSchema } from './schemas/auth-schema'
import { loginBodySchema } from './schemas/login-body-schema'
import { moviePath } from './paths/movie-path'
import { createMovieRequestSchema, createMovieResponseSchema, listMovieResponseSchema } from './schemas/movie-schema'
import { idNameBodySchema } from './schemas/id-name-schema'
import { genrePath } from './paths/genre-path'
import { actorPath } from './paths/actor-path'
import { directorPath } from './paths/director-path'
import { idNameArrayBodySchema } from './schemas/id-name-array-schema'
import { singleMoviePath } from './paths/single-movie-path'
import { votePath } from './paths/vote-path'
import { createVoteSchema } from './schemas/vote-schema'
import { createUserSchema, updateUserSchema } from './schemas/user-schema'
import { successfulMessageSchema } from './schemas/successful-message-schema'
import { userPath } from './paths/user-path'
import { updateUserRoleSchema } from './schemas/user-role-schema'
import { userRolePath } from './paths/user-role-path'
import { updateUserActivationSchema } from './schemas/user-activation-schema'
import { userActivationPath } from './paths/user-activation-path'

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
    name: 'Voto'
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
    '/user': userPath,
    '/user/role': userRolePath,
    '/user/activation': userActivationPath,
    '/movie': moviePath,
    '/movie/{id}': singleMoviePath,
    '/genre': genrePath,
    '/actor': actorPath,
    '/director': directorPath,
    '/vote': votePath
  },
  schemas: {
    auth: authSchema,
    loginBody: loginBodySchema,
    createUser: createUserSchema,
    updateUser: updateUserSchema,
    updateRole: updateUserRoleSchema,
    updateUserActivation: updateUserActivationSchema,
    listMovieResponse: listMovieResponseSchema,
    createMovieRequest: createMovieRequestSchema,
    createMovieResponse: createMovieResponseSchema,
    createVote: createVoteSchema,
    successfulMessage: successfulMessageSchema,
    idNameBody: idNameBodySchema,
    idNameArrayBody: idNameArrayBodySchema
  }
}
