/*
const ERROS_CODE_SUPPORTED = [
  401, // Bad authorization
  404, // Not found
  500, // Internal server error
  501  // Not Implemented
]
const SOLUTIONS_NAMESPACE = [
  'retry', 'relogin'
]
*/

class Error {
  // KIND OF INTERFACE
  constructor (error) {
    this.type = null
    this.code = null
    this.solutions = null // [] => list of string to handle this errors

    this.message = error.message || ''
    this.origin = error.origin || 'unknown' // Where has originated this error?
  }

  setType (newType) {
    this.type = newType
  }

  setCode (newCode) {
    this.code = newCode
  }

  setMessage (message) {
    this.message = message
  }

  setOrigin (origin) {
    this.origin = origin
  }

  setSolutions (newSolutions) {
    this.solutions = newSolutions
  }
}

module.exports = Error
