import { UserRepositoryMemory } from '../../../infra/repository/UserRepositoryMemory'
import SignUpUserService from './SignUpUser'

describe('SignUp User', () => {
  test('Should register a user', async () => {
    const userRepository = new UserRepositoryMemory()
    const sut = new SignUpUserService(userRepository)
    const response = await sut.execute({
      email: 'davi@live.com',
      password: 'teste',
      passwordConfirmation: 'teste'
    })

    expect(response.token).toBe('apiToken')
  })
})
