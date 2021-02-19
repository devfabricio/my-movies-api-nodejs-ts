import { EmailValidator } from '@shared/helpers/validators/email-validator'
import { EmailValidationFake } from '@shared/utils/adapters/fakes/email-validator-fake'
import { EmailValidation } from '@shared/utils/adapters/protocols/email-validation'

type makeSutTypes = {
  sut: EmailValidator
  emailValidationFake: EmailValidation
}

const makeSut = (): makeSutTypes => {
  const emailValidationFake = new EmailValidationFake()
  const sut = new EmailValidator('email', emailValidationFake)
  return { sut, emailValidationFake }
}

describe('Email Validator', () => {
  it('Should return error if invalid email is provided', () => {
    const { sut, emailValidationFake } = makeSut()
    jest.spyOn(emailValidationFake, 'isValid').mockReturnValueOnce(false)
    const error = sut.validate({ email: 'invalid_email' })
    expect(error).toEqual(new Error('Invalid param: email'))
  })
})
