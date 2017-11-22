Meteor.publish('collections', function () {
  return _Collections.find()
})

Meteor.publish('collection', function ({ _id }) {
  return _Collections.find({ _id })
})

Meteor.publish('collections.view', function ({ _id }) {
  console.log(Mongo.Collection.get(_id))
  return [
    _Collections.find({ _id }),
    Mongo.Collection.get(_id).find()
  ]
})
