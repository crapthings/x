Meteor.publish('collections.view', function ({ _id }) {
  console.log(Mongo.Collection.get(_id))
  return [
    Collections.find({ _id }),
    Mongo.Collection.get(_id).find()
  ]
})
