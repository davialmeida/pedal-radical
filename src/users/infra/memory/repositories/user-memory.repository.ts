import { User } from "src/users/entities/user.entity"
import { IUsersRepository } from "src/users/repositories/iusers.repository"

class UserMemoryRepository implements IUsersRepository {
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

export { UserMemoryRepository as UserRepositoryMemory }
