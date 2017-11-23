Meteor.startup(function () {

  const adminUser = Users.findOne({ username: 'admin' })

  if (! adminUser) {
    Accounts.createUser({ username: 'admin', password: 'admin', isAdmin: true })
  }

})
