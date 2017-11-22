_Collections = new Mongo.Collection('_collections')

Meteor.methods({

  'collections.create'({ name, fields = [], _fields = {} }) {
    return _Collections.insert({ name, fields, _fields })
  },

  'collections.update'(_id, values = {}) {
    _Collections.update(_id, { $set: values })
  },

  'collections.remove'(_id) {
    _Collections.remove(_id)
  },

  //

  'collections.add.field'(_id, values = {}) {
    const { _fields } = _Collections.findOne(_id)
    const fieldId = Random.id()
    _.extend(_fields, {
      [fieldId]: values
    })
    console.log(_fields, fieldId, values)
    _Collections.update(_id, {
      $addToSet: { fields: fieldId },
      $set: { _fields },
    })
  },

  'data.create'(_id, values = {}) {
    Mongo.Collection.get(_id).insert(values)
  },

})
