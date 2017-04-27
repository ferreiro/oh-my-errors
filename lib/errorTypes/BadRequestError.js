const Error = require('./Error')

/**
 * The server cannot or will not process the request due to an apparent client error
 * (e.g., malformed request syntax, too large size, invalid request message framing, or deceptive request routing)
 */

class BadRequestError extends Error {
  constructor (data) {
    super(data)
    super.setCode(400)
    super.setType('badRequest')
    super.setSolutions([])
  }
}

module.exports = BadRequestError
