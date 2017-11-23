_ = require('lodash')
moment = require('moment')
faker = require('faker')

React = require('react')
Component = React.Component
mount = require('react-mounter').mount
withTracker = require('meteor/react-meteor-data').withTracker

form2js = require('form2js').form2js

LoadingView = ({ text }) => <div>{text || 'loading'}</div>

EmptyView = ({ text, children }) => {
  if (children)
    return children()

  return <div>{text || 'empty'}</div>
}
