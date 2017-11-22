Meteor.startup(function () {
  _Collections.find().observe({
    added(collection) {
      if (! Mongo.Collection.get(collection._id))
        new Mongo.Collection(collection._id)
    }
  })
})
