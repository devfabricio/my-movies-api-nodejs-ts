import { docResponseObjectType } from '../components/doc-response-object-type'

export const successfulMessageSchema = {
  ...docResponseObjectType('object',{
    id: {
      type: 'string'
    },
    message: {
      type: 'string'
    }
  })
}
