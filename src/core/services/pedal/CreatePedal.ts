import { Pedal } from '@core/entities/Pedal'
import { IPedalRepository } from '@core/repositories/IPedalRepository'

class CreatePedalService {
  constructor (
    private readonly pedalRepository: IPedalRepository
  ) {}

  async execute (pedal: Pedal): Promise<Pedal> {
    await this.pedalRepository.save(pedal)

    return pedal
  }
}

export { CreatePedalService }
