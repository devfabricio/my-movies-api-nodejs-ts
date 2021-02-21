import { ApiController } from '../../../shared/protocols/api-controller'
import { Request, Response } from 'express'
import { makeCreateVoteService } from '../factories/vote/make-create-vote-service'

export default class VoteController implements ApiController {
  async create (request: Request, response: Response): Promise<Response> {
    const createVote = makeCreateVoteService()
    const res = await createVote.execute({ body: request.body })
    return response.json(res)
  }
}
