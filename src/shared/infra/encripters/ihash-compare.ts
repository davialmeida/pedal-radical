export interface IHashCompare {
  compare: (input: string, compareInput: string) => Promise<boolean>
}
