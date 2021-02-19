import { Validator } from './protocols/validator'
import { MissingParamError } from '../errors'

export class RequiredFieldValidator implements Validator {
  private readonly fieldName: string

  constructor (fieldName: string) {
    this.fieldName = fieldName
  }

  validate (body: any): Error {
    if (!body[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}
