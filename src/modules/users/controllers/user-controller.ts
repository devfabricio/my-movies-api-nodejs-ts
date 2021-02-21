import { Request, Response } from 'express'
import { makeCreateUserService } from '../factories/user/make-create-user-service'
import { ApiController } from '../../../shared/protocols/api-controller'
import { makeUpdateUserService } from '../factories/user/make-update-user-service'

export class UserController implements ApiController {
  async create (request: Request, response: Response): Promise<Response> {
    const createUser = makeCreateUserService()
    const res = await createUser.execute({ body: request.body })
    delete res.body.password
    return response.json(res)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const updateUser = makeUpdateUserService()
    const res = await updateUser.execute({ body: request.body })
    return response.json(res)
  }
}
