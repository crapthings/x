Accounts.config({
  forbidClientAccountCreation: true
})

Accounts.onCreateUser((props, user) =>
  _.extend(user, _.omit(props, ['password']))
)

Accounts.addAutopublishFields({
  forLoggedInUser: ['roles'],
  forOtherUsers: [],
})
