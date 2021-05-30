import { User } from '@core/entities/User'
import { IUsersRepository } from '@core/repositories/IUsersRepository'

export default class SignUpUserService {
  constructor (
    private readonly usersRepository: IUsersRepository
  ) {}

  async execute (data: any): Promise<any> {
    const user = new User(data)

    await this.usersRepository.save(user)

    return {
      token: 'apiToken'
    }
  }
}
