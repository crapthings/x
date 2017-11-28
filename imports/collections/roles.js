import SimpleSchema from 'simpl-schema'

Roles = new Mongo.Collection('roles')

const schema = {
  name: {
    type: String,
  }
}

Roles.attachSchema(new SimpleSchema(schema))

export {
  schema,
}
