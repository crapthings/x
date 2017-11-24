import LoginLayout from './login'
import LoginView from '../login'
import MainLayout from './main'

const tracker = ({ children }) => {
  const currentUserId = Meteor.userId()
  if (! currentUserId)
    return { currentUserId }

  const isCurrentUserLoggingIn = Meteor.loggingIn()
  if (isCurrentUserLoggingIn)
    return { currentUserId, isCurrentUserLoggingIn }

  const ready = Meteor.subscribe('login.user').ready()
  if (! ready)
    return { currentUserId, isCurrentUserLoggingIn, ready }

  const currentUser = Meteor.user()
  const collections = Collections.find().fetch()

  _.each(collections, collection => {
    if (! Mongo.Collection.get(collection._id))
      new Mongo.Collection(collection._id)
  })

  return {
    currentUserId, isCurrentUserLoggingIn, ready,
    currentUser, collections, children,
  }
}

const component = ({
  currentUserId, isCurrentUserLoggingIn, ready,
  currentUser, collections, children,
}) => {
  if (! currentUserId)
    return <LoginLayout children={LoginView} />

  if (isCurrentUserLoggingIn)
    return <LoadingView text='logging in' />

  if (! ready)
    return <LoadingView text='init' />

  return <MainLayout children={children} currentUser={currentUser} collections={collections} />

}

export default withTracker(tracker)(component)
