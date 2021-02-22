import { Request, Response } from 'express'
import { ApiController } from '../../../shared/presentation/protocols/api-controller'
import { makeAuthenticationService } from '../factories/authentication/make-authentication-service'

export class AuthenticationController implements ApiController {
  public async create (request: Request, response: Response): Promise<Response> {
    const authentication = makeAuthenticationService()
    const res = await authentication.execute({ body: request.body })
    return response.json(res)
  }
}
