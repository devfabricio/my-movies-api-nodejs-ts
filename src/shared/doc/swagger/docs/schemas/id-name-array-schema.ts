import { docResponseObjectType } from '../components/doc-response-object-type'

export const idNameArrayBodySchema = {
  ...docResponseObjectType('array', {
    id: {
      type: 'string'
    },
    name: {
      type: 'string'
    }
  })
}
