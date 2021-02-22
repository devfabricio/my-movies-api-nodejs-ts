import { CreateUserService } from './create-user-service'
import { Validator } from '../../../shared/presentation/helpers/validators/protocols/validator'
import { ValidatorFake } from '../../../shared/presentation/helpers/validators/fakes/validator-fake'
import { ValidatorComposite } from '../../../shared/presentation/helpers/validators'
import { badRequest } from '../../../shared/presentation/helpers/http/http-helper'

type sutTypes = {
  sut: CreateUserService
  validatorComposite: Validator
}

const makeSut = (): sutTypes => {
  const validators = [
    new ValidatorFake(),
    new ValidatorFake()
  ]
  const validatorComposite = new ValidatorComposite(validators)
  const sut = new CreateUserService(validatorComposite)

  return { sut, validatorComposite }
}

describe('Create User', () => {
  it('Should calls validators with correct values', async () => {
    const { sut, validatorComposite } = makeSut()
    const validator = jest.spyOn(validatorComposite, 'validate')
    const body = {
      name: 'valid_name',
      email: 'valid_email@mail.com',
      password: 'valid_password',
      passwordConfirmation: 'valid_password'
    }
    await sut.execute({ body })
    expect(validator).toHaveBeenCalledWith({ body })
  })
  it('Should returns an error if validator return error', async () => {
    const { sut , validatorComposite } = makeSut()
    const body = {
      email: 'valid_email@mail.com',
      password: 'valid_password',
      passwordConfirmation: 'valid_password'
    }
    jest.spyOn(validatorComposite, 'validate').mockReturnValueOnce(new Error())
    const execute = await sut.execute({ body })
    expect(execute).toEqual(badRequest(new Error()))
  })
})
