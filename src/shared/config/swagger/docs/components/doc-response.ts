import { docContent } from './doc-content'

type statusCodes = 200 | 201 | 400 | 401 | 500

export const docResponse = (statusCode: statusCodes, description: string, schema: string): object => {
  return {
    [statusCode]: {
      description,
      content: docContent(schema)
    }
  }
}
