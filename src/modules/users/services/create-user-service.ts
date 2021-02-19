import { HttpRequest, HttpResponse } from '../../../shared/helpers/http/protocols/http'
import { Validator } from '../../../shared/helpers/validators/protocols/validator'
import { badRequest, serverError } from '../../../shared/helpers/http/http-helper'

export class CreateUserService {
  constructor (private readonly validators: Validator) {}

  public async execute (body: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validators.validate(body)
      if (error) {
        return badRequest(error)
      }
    } catch (error) {
      return serverError()
    }
  }
}
