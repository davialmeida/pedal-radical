class DivergenceError extends Error {
  constructor (paramName: string, divergenceParamName: string) {
    super(`O campo ${paramName} e ${divergenceParamName} devem ser iguais`)
    this.name = 'DivergenceError'
  }
}

export { DivergenceError }
