class UserAlreadyExistsError extends Error {
  constructor (email: string) {
    super(`Não é possível utilizar este email: ${email}`)
    this.name = 'UserAlreadyExistsError'
  }
}

export { UserAlreadyExistsError }
