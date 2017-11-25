import LoginLayout from './login'
import LoginView from '../login'
import MainLayout from './main'

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
  const features = Features.find().fetch()

  _.each(features, ({ _id }) => {
    if (!Mongo.Collection.get(_id))
      new Mongo.Collection(_id)
  })

  return {
    currentUserId, isCurrentUserLoggingIn, ready,
    currentUser, roles, features, children,
  }
}

const component = ({
  currentUserId, isCurrentUserLoggingIn, ready,
  currentUser, roles, features, children,
}) => {
  if (!currentUserId)
    return <LoginLayout children={LoginView} />

  if (isCurrentUserLoggingIn)
    return <LoadingView text='logging in' />

  if (!ready)
    return <LoadingView text='init' />

  return <MainLayout
    currentUser={currentUser}
    roles={roles}
    features={features}
    children={children}
  />
}

export default withTracker(tracker)(component)
