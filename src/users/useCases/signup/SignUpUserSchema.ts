import { MissingParamError } from '@core/errors/MissingParam'
import Joi from 'joi'

export const SignUpUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(32).required(),
  passwordConfirmation: Joi.ref('password')
})
