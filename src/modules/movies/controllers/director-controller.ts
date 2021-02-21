import { ApiController } from '../../../shared/protocols/api-controller'
import { Request, Response } from 'express'
import { makeCreateDirectorService } from '../factories/director/make-create-director-service'

export default class DirectorController implements ApiController {
  async create (request: Request, response: Response): Promise<Response> {
    const createDirector = makeCreateDirectorService()
    const res = await createDirector.execute({ body: request.body })
    return response.json(res)
  }
}
