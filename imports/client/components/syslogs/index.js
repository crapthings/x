const tracker = (props) => {
  const ready = Meteor.subscribe('syslogs').ready()
  if (!ready)
    return { ready }

  const data = Syslog.find().fetch()
  return { ready, data }
}

const component = ({ ready, data }) => {
  if (!ready)
    return <div>loading</div>

  return <div>
    <table className='table table-striped table-hover'>
      <thead>
        <tr>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        {data.map(datum => <tr>
          <td>{role.name}</td>
        </tr>)}
      </tbody>
    </table>
  </div>
}

export default withTracker(tracker)(component)
