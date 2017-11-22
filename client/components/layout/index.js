import { withTracker } from 'meteor/react-meteor-data'

const createCollection = evt => {
  const name = _.trim(prompt('输入名称'))
  name && Meteor.call('collections.create', { name })
}

const tracker = ({ children }) => {
  const subscribe = Meteor.subscribe('collections').ready()
  if (subscribe) {
    const collections = _Collections.find().fetch()
    _.each(collections, collection => {
      if (! Mongo.Collection.get(collection._id))
        new Mongo.Collection(collection._id)
    })
    return { subscribe, collections }
  }

  return { subscribe }
}

const component = ({ subscribe, collections, children }) => {
  if (! subscribe) return <div>loading</div>

  return <div>
    <a href='/'>home</a>
    <button onClick={createCollection}>创建</button>
    {children()}
  </div>
}

export default withTracker(tracker)(component)
