const Error = require('./Error')

class NotImplemented extends Error {
  constructor (data) {
    super(data)
    super.setCode(501)
    super.setType('notImplemented')
    super.setSolutions([])
  }
}

module.exports = NotImplemented
