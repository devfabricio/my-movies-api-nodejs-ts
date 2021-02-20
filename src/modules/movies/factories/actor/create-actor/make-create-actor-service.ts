import { makeCreateActorValitator } from './make-create-actor-valitator'
import CreateActorService from '../../../services/actor/create-actor-service'

export const makeCreateActorService = (): CreateActorService => {
  const validator = makeCreateActorValitator()
  return new CreateActorService(validator)
}
