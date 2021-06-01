class WrongEmailpasswordError extends Error {
  constructor () {
    super('Email ou senha incorretos')
    this.name = 'WrongEmailpasswordError'
  }
}

export { WrongEmailpasswordError }
