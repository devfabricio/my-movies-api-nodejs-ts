export const docRequestBody = (schema: string): object => {
  return {
    content: {
      'application/json': {
        schema: {
          $ref: `#schemas/${schema}`
        }
      }
    }
  }
}
