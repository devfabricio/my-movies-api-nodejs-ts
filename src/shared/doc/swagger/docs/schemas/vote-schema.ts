export const createVoteSchema = {
  type: 'object',
  properties: {
    rate: {
      type: 'integer'
    },
    movieId: {
      type: 'string'
    },
    userId: {
      type: 'string'
    }
  }
}
