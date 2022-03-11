class WrongEmailPasswordError extends Error {
  constructor () {
    super('Email ou senha incorretos')
    this.name = 'WrongEmailPasswordError'
  }
}

export { WrongEmailPasswordError }
