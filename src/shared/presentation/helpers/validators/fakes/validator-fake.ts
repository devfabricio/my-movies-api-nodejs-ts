import { Validator } from '../protocols/validator'

export class ValidatorFake implements Validator {
  validate (_: any): Error {
    return null
  }
}
