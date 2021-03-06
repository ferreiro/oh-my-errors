const Error = require('./Error')
const solutions = require('../Solutions/Solutions')

class Unauthorized extends Error {
  constructor (data) {
    super(data)
    super.setCode(401)
    super.setType('unAuthorized')
    super.setSolutions(data.solutions)
  }
}

module.exports = Unauthorized
