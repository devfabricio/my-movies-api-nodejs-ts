import { Validator } from './protocols/validator'

export class ValidatorComposite implements Validator {
  private readonly validators: Validator[]

  constructor (validators: Validator[]) {
    this.validators = validators
  }

  validate (body: any): Error {
    for (const validator of this.validators) {
      const error = validator.validate(body)
      if (error) {
        return error
      }
    }
  }
}
