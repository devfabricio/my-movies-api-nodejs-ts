import { ValidatorComposite } from './validator-composite'
import { Validator } from './protocols/validator'
import { ValidatorFake } from './fakes/validator-fake'

type SutTypes = {
  sut: ValidatorComposite
  validatorsFakes: Validator[]
}

const makeSut = (): SutTypes => {
  const validatorsFakes = [
    new ValidatorFake(),
    new ValidatorFake()
  ]
  const sut = new ValidatorComposite(validatorsFakes)
  return { sut, validatorsFakes }
}

describe('Validator Composite', () => {
  it('Should return error if any validations fails', () => {
    const { sut, validatorsFakes } = makeSut()
    jest.spyOn(validatorsFakes[1], 'validate').mockReturnValueOnce(new Error())
    const error = sut.validate({ field: 'any_field' })
    expect(error).toEqual(new Error())
  })
})
