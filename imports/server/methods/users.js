Meteor.methods({
  'create.user'(opts) {
    const { username, password } = opts

    const user = {
      username,
      password,
    }

    Accounts.createUser(user)
  }
})
