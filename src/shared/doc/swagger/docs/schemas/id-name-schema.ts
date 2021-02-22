import { docResponseObjectType } from '../components/doc-response-object-type'

export const idNameBodySchema = {
  ...docResponseObjectType('object',{
    id: {
      type: 'string'
    },
    name: {
      type: 'string'
    }
  })
}
