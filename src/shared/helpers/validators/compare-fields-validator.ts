import { Validator } from './protocols/validator'

export class CompareFieldsValidator implements Validator {
  private readonly fieldName: string
  private readonly fieldNameToCompare: string

  constructor (fieldName: string, fieldNameToCompare: string) {
    this.fieldName = fieldName
    this.fieldNameToCompare = fieldNameToCompare
  }

  validate (body: any): Error {
    if (body[this.fieldName] !== body[this.fieldNameToCompare]) {
      return new Error(`Invalid param ${this.fieldName}`)
    }
  }
}
