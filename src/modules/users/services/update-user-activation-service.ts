import { ApiService } from '../../../shared/protocols/api-service'
import { HttpRequest, HttpResponse } from '../../../shared/helpers/http/protocols/http'
import { Validator } from '../../../shared/helpers/validators/protocols/validator'
import { badRequest } from '../../../shared/helpers/http/http-helper'

export default class UpdateUserActivationService implements ApiService {
  constructor (private readonly validators: Validator) {}

  async execute (request: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validators.validate(request.body)
      if (error) {
        return badRequest(error)
      }
      const { id, name, email, currentPassword, password } = request.body
    } catch (error) {

    }
  }
}
