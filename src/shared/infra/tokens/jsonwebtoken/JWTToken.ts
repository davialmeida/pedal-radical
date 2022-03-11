import { IToken } from '../IToken'
import jwt from 'jsonwebtoken'

class JWTToken implements IToken {
  sign (payload: string | Buffer | object, tokenSecret: string): string {
    return jwt.sign(payload, tokenSecret)
  }

  /* verify (payload: string, tokenSecret: string): string {
    return jwt.verify(payload, tokenSecret)
  } */
}

export { JWTToken }
