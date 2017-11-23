Meteor.methods({

  'create.collection'({ name, fields = [], _fields = {} }) {
    return Collections.insert({ name, fields, _fields })
  },

  'update.collection'(_id, values = {}) {
    Collections.update(_id, { $set: values })
  },

  'delete.collection'(_id) {
    Collections.remove(_id)
  },

  //

  'collections.add.field'(_id, values = {}) {
    const { _fields } = Collections.findOne(_id)
    const fieldId = Random.id()
    _.extend(_fields, {
      [fieldId]: values
    })
    console.log(_fields, fieldId, values)
    Collections.update(_id, {
      $addToSet: { fields: fieldId },
      $set: { _fields },
    })
  },

  'data.create'(_id, values = {}) {
    Mongo.Collection.get(_id).insert(values)
  },

})
