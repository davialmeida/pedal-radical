export interface IToken {
  sign: (payload: string | Buffer | object, tokenSecret: string) => string
  // verify: (payload: string, tokenSecret: string) => string
}
