import { docResponseObjectType } from '../components/doc-response-object-type'

export const idNameBodySchema = {
  ...docResponseObjectType({
    id: {
      type: 'string'
    },
    name: {
      type: 'string'
    }
  })
}
