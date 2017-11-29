import SimpleSchema from 'simpl-schema'

SimpleSchema.extendOptions(['inputType', 'inputPlaceholder'])

Roles = new Mongo.Collection('roles')

const schema = {
  name: {
    label: '角色名称',
    type: String,
    inputType: 'text',
    unique: true,
    index: true,
  },
}

Roles.attachSchema(new SimpleSchema(schema))

export {
  schema,
}
