import validator from 'validator'
import { EmailValidation } from './protocols/email-validation'

export class EmailValidationAdapter implements EmailValidation {
  isValid (email: string): boolean {
    return validator.isEmail(email)
  }
}
