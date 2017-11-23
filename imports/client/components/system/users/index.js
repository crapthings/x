const tracker = props => {
  const subscribe = Meteor.subscribe('system.users').ready()

  if (! subscribe)
    return { subscribe }

  const users = Users.find({ isAdmin: { $ne: true } }).fetch()

  return { subscribe, users }
}

const component = ({ subscribe, users }) => {
  if (! subscribe)
    return <LoadingView />

  if (! users.length)
    return <EmptyView />

  return <div>
    <table>
      <thead>
        <tr>
          <th>username</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ username }) => <tr>
          <td>{username}</td>
        </tr>)}
      </tbody>
    </table>
  </div>
}

export default withTracker(tracker)(component)
