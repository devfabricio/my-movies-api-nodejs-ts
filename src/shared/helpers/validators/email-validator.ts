import { EmailValidation } from '@shared/utils/adapters/protocols/email-validation'

export class EmailValidator implements Validator {
  private readonly fieldName: string
  private readonly emailValidation: EmailValidation

  constructor (fieldName: string, emailValidation: EmailValidation) {
    this.fieldName = fieldName
    this.emailValidation = emailValidation
  }

  validate (body: any): Error {
    const isValid = this.emailValidation.isValid(body[this.fieldName])
    if (!isValid) {
      return new Error(`Invalid param: ${this.fieldName}`)
    }
  }
}
