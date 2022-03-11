import { IHashEncrypt } from '../ihash-encrypt'
import bcrypt from 'bcrypt'
import { IHashCompare } from '../ihash-compare'

class BCryptEncrypt implements IHashEncrypt, IHashCompare {
  async encrypt (input: string): Promise<string> {
    return await bcrypt.hash(input, 8)
  }

  async compare (input: string, compareInput: string): Promise<boolean> {
    return await bcrypt.compare(input, compareInput)
  }
}

export { BCryptEncrypt }
