export const docResponseObjectType = (body: object): object => {
  return {
    type: 'object',
    properties: {
      statusCode: {
        type: 'integer'
      },
      body: {
        type: 'object',
        properties: body
      }
    }
  }
}
