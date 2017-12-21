import { MainLayout, LoginLayout } from './layout'
import LoginView from '../domains/login/view'

const tracker = ({ children }) => {
  const currentUserId = Meteor.userId()
  if (!currentUserId)
    return { currentUserId }

  const isCurrentUserLoggingIn = Meteor.loggingIn()
  if (isCurrentUserLoggingIn)
    return { currentUserId, isCurrentUserLoggingIn }

  const ready = Meteor.subscribe('core.collections').ready()
  if (!ready)
    return { currentUserId, isCurrentUserLoggingIn, ready }

  const currentUser = Meteor.user()
  const roles = Roles.find().fetch()

  const builtInRoles = _.filter(roles, role => _.includes(['system', 'users', 'contents'], role._id))
  const customRoles = _.reject(roles, role => _.includes(['system', 'users', 'contents'], role._id))

  const features = Features.find().fetch()

  _.each(features, ({ _id }) => {
    if (!Mongo.Collection.get(_id))
      new Mongo.Collection(_id)
  })

  return {
    currentUserId, isCurrentUserLoggingIn, ready,
    currentUser, roles, builtInRoles, customRoles, features, children,
  }
}

const component = props => {
  const { currentUserId, isCurrentUserLoggingIn, ready } = props
  if (!currentUserId)
    return <LoginLayout children={LoginView} />

  if (isCurrentUserLoggingIn)
    return <LoadingView text='logging in' />

  if (!ready)
    return <LoadingView text='init' />

  return <MainLayout {...props} />
}

module.exports = withTracker(tracker)(component)
