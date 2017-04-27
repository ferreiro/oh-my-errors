const solutions = require('./solutions/Solutions')

const NotImplementedError = require('./errorTypes/NotImplementedError')
const UnauthorizedError = require('./errorTypes/UnauthorizedError')
const ForbiddenError = require('./errorTypes/ForbiddenError')
const BadRequestError = require('./errorTypes/BadRequestError')
const NotFoundError = require('./errorTypes/NotFoundError')
const InternalError = require('./errorTypes/InternalError')

class ErrorHandler {
  constructor () {
    this.instance = null
  }

  // Singleton
  static getInstance () {
    if (!this.instance) {
      this.instance = new ErrorHandler()
    }
    return this.instance
  }

  createNotImplementedError501 (data) {
    return new NotImplementedError({
      origin: data.origin,
      message: data.message
    })
  }

  createBadRequest400 (data) {
    return new BadRequestError({
      origin: data.origin,
      message: data.message
    })
  }

  createUnauthorizedError401 (data) {
    return new UnauthorizedError({
      origin: data.origin,
      message: data.message
    })
  }

  createForbiddenError403 (data) {
    return new ForbiddenError({
      origin: data.origin,
      message: data.message
    })
  }

  // This is a special case of a 404 error.
  // Where you can add action to relogin the user

  createUserNotFoundError404 (data) {
    return new NotFoundError({
      origin: data.origin,
      message: data.message || 'We can\'t find your username in our system. Please, login again',
      solutions: [
        solutions.relogin()
      ]
    })
  }

  createNotFoundError404 (data) {
    return new NotFoundError({
      origin: data.origin,
      message: data.message
    })
  }

  createInternalError500 (data) {
    return new InternalError({
      origin: data.origin,
      message: data.message
    })
  }

  composeJsonErrorsReponse (errors) {
    const jsonErrorsReponse = {
      'errors': errors
    }
    return jsonErrorsReponse
  }
}

module.exports = ErrorHandler.getInstance()
