export const updateUserActivationSchema = {
  type: 'object',
  properties: {
    userId: {
      type: 'string'
    },
    activation: {
      type: 'string'
    }
  }
}
