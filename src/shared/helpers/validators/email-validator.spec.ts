import { EmailValidator } from './email-validator'
import { EmailValidationFake } from '../../utils/adapters/fakes/email-validator-fake'
import { EmailValidation } from '../../utils/adapters/protocols/email-validation'
import {InvalidParamError} from "../errors";

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
    expect(error).toEqual(new InvalidParamError('email'))
  })
  it('Should calls email validation with correct email', () => {
    const { sut, emailValidationFake } = makeSut()
    const isValid = jest.spyOn(emailValidationFake, 'isValid')
    sut.validate({ email: 'email@email.com' })
    expect(isValid).toHaveBeenCalledWith('email@email.com')
  })
  it('Should returns anything if valid email is provided', () => {
    const { sut, emailValidationFake } = makeSut()
    jest.spyOn(emailValidationFake, 'isValid').mockReturnValueOnce(true)
    const error = sut.validate({ email: 'email@email.com' })
    expect(error).toBeFalsy()
  })
})
