export class RequiredFieldValidator {
  private readonly fieldName: string

  constructor (fieldName: string) {
    this.fieldName = fieldName
  }

  validate (body: any): Error {
    if (!body[this.fieldName]) {
      return new Error(`Missing Param: ${this.fieldName}`)
    }
  }
}
