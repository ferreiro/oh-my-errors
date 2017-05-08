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

  // Contact support team
  contact () {
    return {
      type: 'contact'
    }
  }
}

module.exports = new Solutions()
