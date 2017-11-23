Meteor.publish(null, function () {
  const _id = this.userId

  if (_id)
    return Users.find({ _id }, { fields: { services: false } })
})

Meteor.publish('login.user', function () {

  if (! Meteor.user()) throw new Meteor.Error()

  const currentUserCursor = Users.find({ _id: Meteor.userId() }, {
    fields: {
      services: false
    }
  })

  const collectionsCursor = Collections.find()

  return [
    currentUserCursor,
    collectionsCursor,
  ]

})
