const tracker = (props) => {
  const ready = Meteor.subscribe('accounts.administrators').ready()
  if (!ready)
    return { ready }

  const accounts = Users.find({ _id: { $nin: ['system', 'users', 'contents'] } }).fetch()
  return { ready, accounts }
}

const component = ({ ready, accounts }) => {
  if (!ready)
    return <div>loading</div>

  return <div>
    <h3>系统内置角色</h3>
    <table className='table table-striped table-hover'>
      <thead>
        <tr>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map(role => <tr>
          <td>{role.name}</td>
        </tr>)}
      </tbody>
    </table>
  </div>
}

export default withTracker(tracker)(component)
