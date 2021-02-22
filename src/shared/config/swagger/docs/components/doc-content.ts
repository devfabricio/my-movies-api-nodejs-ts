export const docContent = (schema: string): object => {
  return {
    'application/json': {
      schema: {
        $ref: `#schemas/${schema}`
      }
    }
  }
}
