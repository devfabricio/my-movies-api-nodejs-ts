import { EmailValidation } from '@shared/utils/adapters/protocols/email-validation'

export class EmailValidationFake implements EmailValidation {
  isValid (_: string): boolean {
    return true
  }
}
