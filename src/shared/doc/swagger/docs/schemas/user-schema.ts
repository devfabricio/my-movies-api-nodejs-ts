export const createUserSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    passwordConfirmation: {
      type: 'string'
    }
  }
}

export const updateUserSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    currentPassword: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    passwordConfirmation: {
      type: 'string'
    }
  }
}
