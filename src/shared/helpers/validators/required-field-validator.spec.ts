import { RequiredFieldValidator } from './required-field-validator';

const makeSut = (): RequiredFieldValidator => {
  return new RequiredFieldValidator('field')
}

describe('Required Field Validator', () => {
  test('Should return error if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new Error(`Missing Param: ${'field'}`))
  })
})
