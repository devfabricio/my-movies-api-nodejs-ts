import { CompareFieldsValidator } from '@shared/helpers/validators/compare-fields-validator'

const makeSut = (): CompareFieldsValidator => {
  return new CompareFieldsValidator('field', 'fieldToCompare')
}

describe('Required Field Validator', () => {
  it('Should return error if the values of the fields are different', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_value', fieldToCompare: 'invalid_value' })
    expect(error).toEqual(new Error('Invalid param field'))
  })
})
