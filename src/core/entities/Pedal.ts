import { MissingParamError } from '@core/errors/MissingParam'
import { uuid } from 'uuidv4'

export class Pedal {
  public readonly id!: string

  public name: string
  public start_date: Date
  public start_date_registration: Date
  public end_date_registration: Date
  public additional_information?: string
  public start_place: string
  public participants_limit?: string

  constructor (props: Omit<Pedal, 'id'>, id?: string) {
    this.name = props.name
    this.start_date = props.start_date
    this.start_date_registration = props.start_date_registration
    this.end_date_registration = props.end_date_registration
    this.additional_information = props.additional_information
    this.start_place = props.start_place
    this.participants_limit = props.participants_limit

    if (!id) {
      this.id = uuid()
    }

    if (!this.name) throw new MissingParamError('name')
    if (!this.start_date) throw new MissingParamError('start_date')
    if (!this.start_date_registration) throw new MissingParamError('start_date_registration')
    if (!this.end_date_registration) throw new MissingParamError('end_date_registration')
    if (!this.additional_information) throw new MissingParamError('additional_information')
    if (!this.start_place) throw new MissingParamError('start_place')
    if (!this.participants_limit) throw new MissingParamError('participants_limit')
  }
}
