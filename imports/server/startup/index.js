Meteor.startup(function () {
  Features.find().observe({
    added(feature) {
      if (!Mongo.Collection.get(feature._id))
        new Mongo.Collection(feature._id)
    }
  })
})
