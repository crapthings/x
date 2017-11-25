Meteor.publish('roles', function () {
  if (!this.userId)
    return []

  return Roles.find()
})
