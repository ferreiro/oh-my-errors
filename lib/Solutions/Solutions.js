class Solutions {
  relogin () {
    return {
      type: 'reLogin'
    }
  }

  refresh () {
    return {
      type: 'reFresh'
    }
  }

  retry () {
    return {
      type: 'reTry'
    }
  }

  createAccount () {
    return {
      type: 'createAccount'
    }
  }

  // Contact support team
  contact () {
    return {
      type: 'contact'
    }
  }
}

module.exports = new Solutions()
