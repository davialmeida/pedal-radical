import { DivergenceError } from '@core/errors/DivergenceError'
import { MissingParamError } from '@core/errors/MissingParam'
import { UserAlreadyExistsError } from '@core/errors/UserAlreadyExistsError'
import { IUsersRepository } from '@core/repositories/IUsersRepository'
import { BCryptEncrypt } from '@infra/encripters/bcrypt/BCryptEncrypt'
import { UserRepositoryMemory } from '@infra/repository/UserRepositoryMemory'
import { JWTToken } from '@infra/tokens/jsonwebtoken/JWTToken'
import { AuthenticationService } from '../authentication/Authentication'
import SignUpUserService from './SignUpUser'

const buildMakeAuthentication = (userRepository: IUsersRepository | null = null): any => {
  if (!userRepository) userRepository = new UserRepositoryMemory()
  const bcryptEncrypter = new BCryptEncrypt()
  const token = new JWTToken()

  return new AuthenticationService(userRepository, bcryptEncrypter, token)
}
const buildMakeSignUpUser = (userRepository: IUsersRepository | null = null): any => {
  if (!userRepository) userRepository = new UserRepositoryMemory()
  const bcryptEncrypter = new BCryptEncrypt()

  return new SignUpUserService(userRepository, bcryptEncrypter)
}
describe('SignUp User', () => {
  test('Should register a user', async () => {
    const userRepository = new UserRepositoryMemory()
    const sut = buildMakeSignUpUser(userRepository)
    const sutAuthenticationService = buildMakeAuthentication(userRepository)
    const params = {
      name: 'Davi Almeida',
      email: 'davi@live.com',
      password: 'teste123',
      passwordConfirmation: 'teste123'
    }
    const response = await sut.execute(params)

    response.token = await sutAuthenticationService.authenticate(params.email, params.password)

    expect(response.token).toBe(response.token)
  })

  test('Should no register a user if email not provided', async () => {
    const sut = buildMakeSignUpUser()
    let errSut = {}
    try {
      await sut.execute({
        name: 'Davi Almeida',
        password: 'teste123',
        passwordConfirmation: 'teste123'
      })
    } catch (err) {
      errSut = err
    }

    expect(errSut).toEqual(new MissingParamError('email'))
  })

  test('Should no register a user if password not provided', async () => {
    const sut = buildMakeSignUpUser()
    let errSut = {}
    try {
      await sut.execute({
        name: 'Davi Almeida',
        email: 'davi@teste.com',
        passwordConfirmation: 'teste123'
      })
    } catch (err) {
      errSut = err
    }

    expect(errSut).toEqual(new MissingParamError('password'))
  })

  test('Should no register a user if passwordConfirmation not provided', async () => {
    const sut = buildMakeSignUpUser()
    let errSut = {}
    try {
      await sut.execute({
        name: 'Davi Almeida',
        email: 'davi@teste.com',
        password: 'teste123'
      })
    } catch (err) {
      errSut = err
    }

    expect(errSut).toEqual(new MissingParamError('passwordConfirmation'))
  })

  test('Should no register a user if password is divergent', async () => {
    const sut = buildMakeSignUpUser()
    let errSut = {}
    try {
      await sut.execute({
        name: 'Davi Almeida',
        email: 'davi@teste.com',
        password: '1234',
        passwordConfirmation: 'teste123'
      })
    } catch (err) {
      errSut = err
    }

    expect(errSut).toEqual(new DivergenceError('password', 'confirmationPassword'))
  })

  test('Should no register a user if user already exists', async () => {
    const sut = buildMakeSignUpUser()
    let errSut = {}
    const data = {
      name: 'Davi Almeida',
      email: 'davi@teste2.com',
      password: 'teste123',
      passwordConfirmation: 'teste123'
    }
    try {
      await sut.execute(data)
    } catch (err) {
      errSut = err
    }

    expect(errSut).toEqual(new UserAlreadyExistsError(data.email))
  })
})
