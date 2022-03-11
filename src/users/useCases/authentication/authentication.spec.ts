import { WrongEmailPasswordError } from '@core/errors/WrongEmailPasswordError'
import { BCryptEncrypt } from '@infra/encripters/bcrypt/BCryptEncrypt'
import { UserRepositoryMemory } from '@infra/repository/UserRepositoryMemory'
import { JWTToken } from '@infra/tokens/jsonwebtoken/JWTToken'
import SignUpUserService from '../signup/SignUpUser'
import { AuthenticationService } from './authentication'

describe('Authenticate User', () => {
  test('Should user must be authenticated', async () => {
    const userRepository = new UserRepositoryMemory()
    const encripter = new BCryptEncrypt()
    const tokenJWT = new JWTToken()

    const signupService = new SignUpUserService(userRepository, encripter)

    await signupService.execute({
      name: 'Davi',
      email: 'davistrife@live.com',
      password: 'teste1234',
      passwordConfirmation: 'teste1234'
    })

    const sut = new AuthenticationService(userRepository, encripter, tokenJWT)

    const token = await sut.authenticate('davistrife@live.com', 'teste1234')

    expect(typeof token).toEqual('string')
  })

  test('Should user not be authenticated if password is incorret', async () => {
    const userRepository = new UserRepositoryMemory()
    const encripter = new BCryptEncrypt()
    const tokenJWT = new JWTToken()

    const signupService = new SignUpUserService(userRepository, encripter)

    await signupService.execute({
      name: 'Davi',
      email: 'davistrife@live.com',
      password: 'teste1234',
      passwordConfirmation: 'teste1234'
    })

    const sut = new AuthenticationService(userRepository, encripter, tokenJWT)

    try {
      await sut.authenticate('davistrife@live.com', 'teste1235')
    } catch (err) {
      expect(err).toEqual(new WrongEmailPasswordError())
    }
  })

  test('Should user not be authenticated if email is incorret', async () => {
    const userRepository = new UserRepositoryMemory()
    const encripter = new BCryptEncrypt()
    const tokenJWT = new JWTToken()

    const sut = new AuthenticationService(userRepository, encripter, tokenJWT)

    try {
      await sut.authenticate('davistrife@live.com', 'teste1235')
    } catch (err) {
      expect(err).toEqual(new WrongEmailPasswordError())
    }
  })

  /* test('Should no register a user if email not provided', async () => {
    const userRepository = new UserRepositoryMemory()
    const encripter = new BCryptEncrypt()
    const tokenJWT = new JWTToken()

    const sut = new AuthenticationService(userRepository, encripter, tokenJWT)

    const token = await sut.authenticate('davistrife@live.com', '')

    expect(typeof token).toEqual('string')
  }) */
})
