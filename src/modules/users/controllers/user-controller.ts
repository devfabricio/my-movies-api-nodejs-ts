import { Request, Response } from 'express'
import { makeCreateUserService } from '../factories/create-user/make-create-user-service'

export class UserController {
  async create (request: Request, response: Response): Promise<Response> {
    const createUser = makeCreateUserService()
    const res = await createUser.execute({ body: request.body })
    delete res.body.password
    return response.json(res)
  }
}
