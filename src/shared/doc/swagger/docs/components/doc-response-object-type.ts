type bodyType = 'object' | 'array'

export const docResponseObjectType = (bodyType: bodyType, body: object): object => {
  return {
    type: 'object',
    properties: {
      statusCode: {
        type: 'integer'
      },
      body: bodyType === 'object'
        ? {
          type: 'object',
          properties: body
        } : {
          type: 'array',
          items: {
            type: 'object',
            properties: body
          }
        }
    }
  }
}
