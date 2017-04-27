const Error = require('./Error')
const solutions = require('../Solutions/Solutions')

class Forbidden extends Error {
  constructor (data) {
    super(data)
    super.setCode(403)
    super.setType('forbidden')
    super.setSolutions([
      solutions.relogin(),
      solutions.contact()
    ])
  }
}

module.exports = Forbidden
