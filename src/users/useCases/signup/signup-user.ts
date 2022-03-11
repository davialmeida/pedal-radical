import { DivergenceError } from "src/shared/errors/divergence-error"
import { MissingParamError } from "src/shared/errors/missing-param"
import { IHashEncrypt } from "src/shared/infra/encripters/ihash-encrypt"
import { User } from "src/users/entities/user.entity"
import { UserAlreadyExistsError } from "src/users/errors/user-already-exists.error"
import { IUsersRepository } from "src/users/repositories/iusers.repository"

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
