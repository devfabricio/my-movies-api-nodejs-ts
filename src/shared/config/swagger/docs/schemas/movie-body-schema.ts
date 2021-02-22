export const movieProperties = {
  title: {
    type: 'string'
  },
  overview: {
    type: 'string'
  },
  releaseDate: {
    type: 'string'
  },
  posterPath: {
    type: 'string'
  },
  genres: {
    type: 'array',
    items: {
      type: 'string'
    },
    description: 'Ids dos gêneros cadastrados'
  },
  actors: {
    type: 'array',
    items: {
      type: 'string'
    },
    description: 'Ids dos atores cadastrados'
  },
  directors: {
    type: 'array',
    items: {
      type: 'string'
    },
    description: 'Ids dos atores diretores'
  }
}

export const movieBodySchema = {
  type: 'object',
  properties: movieProperties
}
