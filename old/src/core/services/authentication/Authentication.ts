import { WrongEmailPasswordError } from '@core/errors/WrongEmailPasswordError'
import { IUsersRepository } from '@core/repositories/IUsersRepository'
import { IHashCompare } from '@infra/encripters/IHashCompare'
import { IHashEncrypt } from '@infra/encripters/IHashEncrypt'
import { IToken } from '@infra/tokens/IToken'

class AuthenticationService {
  constructor (
    private readonly usersRepository: IUsersRepository,
    private readonly encrypter: IHashEncrypt & IHashCompare,
    private readonly token: IToken
  ) {}

  async authenticate (email: string, password: string): Promise<string> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) throw new WrongEmailPasswordError()

    const validPassword = await this.encrypter.compare(password, user.password)

    if (!validPassword) throw new WrongEmailPasswordError()

    const token = this.token.sign({
      id: user.id,
      name: user.name,
      email: user.email
    }, 'teste')

    return token
  }
}

export { AuthenticationService }
