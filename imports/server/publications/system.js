Meteor.publish('system.users', function () {
  return Users.find({ isAdmin: { $ne: true } })
})
