import { Pedal } from '@core/entities/Pedal'
import { PedalRepositoryMemory } from '@infra/repository/PedalRepositoryMemory'
import { CreatePedalService } from './CreatePedal'

describe('Create Pedal', () => {
  test('Should pedal must be created', async () => {
    const pedalRepository = new PedalRepositoryMemory()
    const sut = new CreatePedalService(pedalRepository)

    const params = {
      name: '50KM do Lucas',
      start_date: new Date('2021-11-12'),
      start_date_registration: new Date('2021-10-12'),
      end_date_registration: new Date('2021-10-31'),
      additional_information: '',
      start_place: 'Teresina',
      participants_limit: '200'
    }

    const pedal = new Pedal(params)

    const response = await sut.execute(pedal)

    expect(response).toBeInstanceOf(Pedal)
  })
})
