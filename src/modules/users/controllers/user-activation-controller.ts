import { ApiController } from '../../../shared/presentation/protocols/api-controller'
import { Request, Response } from 'express'
import { makeUpdateUserActivationService } from '../factories/user/make-update-user-activation-service'

export class UserActivationController implements ApiController {
  async update (request: Request, response: Response): Promise<Response> {
    const updateUserActivation = makeUpdateUserActivationService()
    const res = await updateUserActivation.execute({ body: request.body })
    return response.status(res.statusCode).json(res)
  }
}
