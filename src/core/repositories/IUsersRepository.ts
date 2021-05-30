import { User } from '@core/entities/User'

export interface IUsersRepository {
  findByEmail: (email: string) => Promise<User | null>
  save: (user: User) => Promise<void>
}
