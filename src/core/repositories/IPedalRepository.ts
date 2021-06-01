import { Pedal } from '@core/entities/Pedal'

export interface IPedalRepository {
  findById: (id: string) => Promise<Pedal | null>
  save: (pedal: Pedal) => Promise<void>
}
