import { User } from '@core/entities/User'
import { IUsersRepository } from '@core/repositories/IUsersRepository'

class UserRepositoryMemory implements IUsersRepository {
  private readonly users: User[] = [{
    id: 'hash',
    email: 'davi@teste2.com',
    name: 'Davi',
    password: 'hash'
  }]

  async findByEmail (email: string): Promise<User | null> {
    const user = this.users.find((user: User) => user.email === email) ?? null

    return user
  }

  async save (user: User): Promise<void> {
    this.users.push(user)
  }
}

export { UserRepositoryMemory }
