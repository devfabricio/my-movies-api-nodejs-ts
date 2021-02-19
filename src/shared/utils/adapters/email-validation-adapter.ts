import { EmailValidation } from '@shared/utils/adapters/protocols/email-validation'
import validator from 'validator'

export class EmailValidationAdapter implements EmailValidation {
  isValid (email: string): boolean {
    return validator.isEmail(email)
  }
}
