import { docResponseObjectType } from '../components/doc-response-object-type'

export const movieDefaultProperties = {
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
  }
}

export const listMovieResponseSchema = {
  ...docResponseObjectType('array', {
    id: {
      type: 'string'
    },
    ...movieDefaultProperties,
    createdAt: {
      type: 'string'
    },
    updatedAt: {
      type: 'string'
    },
    genres: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          name: {
            type: 'string'
          }
        }
      }
    }
  })
}

export const createMovieRequestSchema = {
  type: 'object',
  properties: {
    ...movieDefaultProperties,
    genresIds: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    actorsIds: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    directorsIds: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    userId: {
      type: 'string'
    }
  }
}

export const createMovieResponseSchema = {
  ...docResponseObjectType('object', {
    ...movieDefaultProperties,
    voteAverage: {
      type: 'integer'
    },
    genres: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          name: {
            type: 'string'
          }
        }
      }
    },
    actors: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          name: {
            type: 'string'
          }
        }
      }
    },
    directors: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          name: {
            type: 'string'
          }
        }
      }
    },
    id: {
      type: 'string'
    },
    createdAt: {
      type: 'string'
    },
    updatedAt: {
      type: 'string'
    }
  })
}
