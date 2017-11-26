Meteor.startup(function () {
  const users = _.times(200, n => ({
    username: faker.internet.userName(),
    profile: {
      name: faker.name.findName(),
    }
  }))

  Users.batchInsert(users)
})
