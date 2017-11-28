import SimpleSchema from 'simpl-schema'

Users = Meteor.users

Users.attachSchema(new SimpleSchema({
  username: {
    type: String,
    optional: true,
  },

  emails: {
    type: Array,
    optional: true,
  },

  roles: {
    type: Array,
  },

  'roles.$': {
    type: String
  },

  createdAt: {
    type: Date
  },

  services: {
    type: Object,
    optional: true,
    blackbox: true,
  },

  heartbeat: {
    type: Date,
    optional: true,
  },
}))

Users.helpers({
  firstNameLetter() {
    const { name, username } = this
    return _.first(_.toUpper(name || username))
  },

  inRoles(roles) {
    const { roles: currentRoles } = Meteor.user()
    return _.chain(currentRoles)
      .intersection(roles)
      .size()
      .value()
  },

  inAdminRoles() {
    return this.inRoles(['system', 'users', 'contents'])
  },
})
