import { withTracker } from 'meteor/react-meteor-data'

const tracker = ({ _id }) => {
  const collections = Features.find().fetch()
  return { collections }
}

const component = ({ collections }) => {
  return <div>
    <ul>
      {collections.map(collection => <li key={collection._id}>
        <a href={`/collections/${collection._id}`}>{collection.name}</a> <a href={`/view/collections/${collection._id}`}>view list</a>
      </li>)}
    </ul>
  </div>
}

export default withTracker(tracker)(component)
