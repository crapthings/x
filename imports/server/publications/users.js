publish(null, function () {
  const _id = this.userId
  return Users.find({ _id }, { fields: { services: false } })
})

publish('login.user', function () {
  const roles = Roles.find()
  const features = Features.find()

  return [roles, features]
})
