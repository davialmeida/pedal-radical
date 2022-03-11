class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`É necessário que o campo ${paramName} seja preenchido`)
    this.name = 'MissingParamError'
  }
}

export { MissingParamError }
