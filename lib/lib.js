_ = require('lodash')
is = require('is_js')
moment = require('moment')
faker = require('faker')

React = require('react')
Component = React.Component

withTracker = require('meteor/react-meteor-data').withTracker

mountWithOptions = require('react-mounter').withOptions
mount = mountWithOptions({
  rootId: 'app-view'
}, require('react-mounter').mount)

form2js = require('form2js').form2js

Deny = {
  roles(roles) {
    const { roles: currentRoles } = Meteor.user()
    return _.isEmpty(_.intersection(currentRoles, roles)) ? false : true
  },

  admin() {
    return this.roles(['system', 'users', 'contents'])
  },


}
