import { ApiController } from '../../../shared/protocols/api-controller'
import { Request, Response } from 'express'
import { makeCreateActorService } from '../factories/actor/create-actor/make-create-actor-service'

export default class ActorController implements ApiController {
  async create (request: Request, response: Response): Promise<Response> {
    const createActor = makeCreateActorService()
    const res = await createActor.execute({ body: request.body })
    return response.json(res)
  }
}
