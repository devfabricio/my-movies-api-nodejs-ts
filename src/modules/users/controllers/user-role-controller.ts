import { ApiController } from '../../../shared/presentation/protocols/api-controller'
import { Request, Response } from 'express'
import { makeUpdateUserRoleService } from '../factories/user/make-update-user-role-service'

export class UserRoleController implements ApiController {
  async update (request: Request, response: Response): Promise<Response> {
    const updateUserRole = makeUpdateUserRoleService()
    const res = await updateUserRole.execute({ body: request.body })
    return response.status(res.statusCode).json(res)
  }
}
