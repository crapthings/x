methods({

  'create.features'({ name, fields = [], _fields = {} }) {
    return Features.insert({ name, fields, _fields })
  },

  'update.features'(_id, values = {}) {
    Features.update(_id, { $set: values })
  },

  'delete.features'(_id) {
    Features.remove(_id)
  },

  //

  'collections.add.field'(_id, values = {}) {
    const { _fields } = Features.findOne(_id)
    const fieldId = Random.id()
    _.extend(_fields, {
      [fieldId]: values
    })
    console.log(_fields, fieldId, values)
    Features.update(_id, {
      $addToSet: { fields: fieldId },
      $set: { _fields },
    })
  },

  'data.create'(_id, values = {}) {
    Mongo.Collection.get(_id).insert(values)
  },

})
