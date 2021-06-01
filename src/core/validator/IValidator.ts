import { ValidatorResult } from './ValidatorResult'

interface IValidator {
  validate: (data: any) => ValidatorResult
}

export { IValidator }
