const Error = require('./Error')

class NotFound extends Error {
  constructor (data) {
    super(data)
    super.setCode(404)
    super.setType('notFound')
    super.setSolutions(data.solutions || [])
  }
}

module.exports = NotFound
