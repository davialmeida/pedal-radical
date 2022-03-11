import { User } from "../entities/user.entity";

export interface IUsersRepository {
  findByEmail: (email: string) => Promise<User | null>
  save: (user: User) => Promise<void>
}
