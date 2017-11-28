methods = function (methods) {
  const _methods = {}

  _.each(methods, (method, methodName) => {
    _methods[methodName] = function () {
      if (!this.userId)
        throw new Meteor.Error('用户未登录')

      return method.apply(this, arguments)
    }
  })

  Meteor.methods(_methods)
}

publish = function (name, func) {
  Meteor.publish(name, function () {
    const self = this
    try {
      self.unblock()
      if (!self.userId)
          throw new Meteor.Error('用户未登录')
      return func.apply(self, arguments)
    } catch (e) {
      console.log(e)
      throw e
    }
  })
}
