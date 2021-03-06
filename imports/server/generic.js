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
    if (!this.userId)
        throw new Meteor.Error('用户未登录')
    this.unblock()
    return func.apply(this, arguments)
  })
}

methods({
  insert(featureName, fields) {
    Mongo.Collection.get(featureName).insert(fields)
  },

  update(featureName, _id, fields) {
    Mongo.Collection.get(featureName).update(_id, { $set: fields })
  },

  remove(featureName, _id) {
    Mongo.Collection.get(featureName).remove(_id)
  },
})
