export interface IHashEncrypt {
  encrypt: (input: string) => Promise<string>
}
