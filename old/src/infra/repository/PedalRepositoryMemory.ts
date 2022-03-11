import { Pedal } from '@core/entities/Pedal'
import { IPedalRepository } from '@core/repositories/IPedalRepository'

class PedalRepositoryMemory implements IPedalRepository {
  private readonly pedal: Pedal[] = [{
    id: 'id',
    name: '50KM do Lucas',
    start_date: new Date('2021-11-12'),
    start_date_registration: new Date('2021-10-12'),
    end_date_registration: new Date('2021-10-31'),
    additional_information: '',
    start_place: 'Teresina',
    participants_limit: '200'
  }]

  async findById (id: string): Promise<Pedal | null> {
    const pedal = this.pedal.find((pedal: Pedal) => pedal.id === id) ?? null

    return pedal
  }

  async save (pedal: Pedal): Promise<void> {
    this.pedal.push(pedal)
  }
}

export { PedalRepositoryMemory }
