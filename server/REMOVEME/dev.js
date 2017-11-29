Meteor.startup(function () {
  const users = _.times(20, n => ({
    username: faker.internet.userName(),
    name: faker.name.findName(),
    roles: ['test'],
  }))

  Users.batchInsert(users)
})
