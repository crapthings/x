Meteor.startup(function () {
  const users = _.times(200, n => ({
    username: faker.internet.userName(),
    name: faker.name.findName(),
    roles: ['system'],
  }))

  Users.batchInsert(users)
})
