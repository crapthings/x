publish('core.collections', function () {
  return [
    Roles.find(),
    Features.find(),
  ]
})

Meteor.publish('features.view', function ({ _id }) {
  console.log(Mongo.Collection.get(_id))
  return [
    Features.find({ _id }),
    Mongo.Collection.get(_id).find()
  ]
})
