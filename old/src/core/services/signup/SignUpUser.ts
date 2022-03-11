import { User } from '@core/entities/User'
import { MissingParamError } from '@core/errors/MissingParam'
import { DivergenceError } from '@core/errors/DivergenceError'
import { IUsersRepository } from '@core/repositories/IUsersRepository'
import { UserAlreadyExistsError } from '@core/errors/UserAlreadyExistsError'
import { IHashEncrypt } from '@infra/encripters/IHashEncrypt'

export default class SignUpUserService {
  constructor (
    private readonly usersRepository: IUsersRepository,
    private readonly encrypter: IHashEncrypt
  ) {}

  async execute (data: any): Promise<any> {
    const user = new User(data)

    const isEmailExists = await this.usersRepository.findByEmail(user.email)
    const isEqualPasswords = data.passwordConfirmation === user.password

    if (!data.passwordConfirmation) throw new MissingParamError('passwordConfirmation')

    if (!isEqualPasswords) throw new DivergenceError('password', 'confirmationPassword')

    if (isEmailExists) throw new UserAlreadyExistsError(user.email)

    user.password = await this.encrypter.encrypt(user.password)

    await this.usersRepository.save(user)

    return user
  }
}
