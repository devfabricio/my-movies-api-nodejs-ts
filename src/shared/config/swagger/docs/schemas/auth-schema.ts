import { docResponseObjectType } from '../components/doc-response-object-type'

export const authSchema = {
  ...docResponseObjectType('object', {
    accessToken: {
      type: 'string'
    }
  })
}
