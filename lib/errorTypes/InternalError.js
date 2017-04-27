const Error = require('./Error')
const solutions = require('../Solutions/Solutions')

class InternalError extends Error {
  constructor (data) {
    super(data)
    super.setMessage(data.message || 'Internal server error. Sorry for the inconvenience')
    super.setCode(500)
    super.setType('internalError')
    super.setSolutions([
      solutions.retry(),
      solutions.contact()
    ])
  }
}

module.exports = InternalError
