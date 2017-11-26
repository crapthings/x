publish('accounts.administrators', function () {
  return Users.find()
})

publish('accounts.users', function () {
  return Users.find()
})
