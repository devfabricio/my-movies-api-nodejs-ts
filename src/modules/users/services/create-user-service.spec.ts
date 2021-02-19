import { CreateUserService } from './create-user-service'
import { Validator } from '../../../shared/helpers/validators/protocols/validator'
import { ValidatorFake } from '../../../shared/helpers/validators/fakes/validator-fake'
import { ValidatorComposite } from '../../../shared/helpers/validators'

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
})
