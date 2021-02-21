import { makeCreateVoteValitator } from './make-create-vote-valitator'
import CreateVoteService from '../../services/vote/create-vote-service'

export const makeCreateVoteService = (): CreateVoteService => {
  const validator = makeCreateVoteValitator()
  return new CreateVoteService(validator)
}
