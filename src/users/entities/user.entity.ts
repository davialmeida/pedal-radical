import { MissingParamError } from '@core/errors/MissingParam'
import { uuid } from 'uuidv4'

export class User {
  public readonly id!: string

  public name: string
  public email: string
  public password: string

  constructor (props: Omit<User, 'id'>, id?: string) {
    this.name = props.name
    this.email = props.email
    this.password = props.password

    if (!id) {
      this.id = uuid()
    }

    if (!this.name) throw new MissingParamError('name')
    if (!this.email) throw new MissingParamError('email')
    if (!this.password) throw new MissingParamError('password')
  }
}
