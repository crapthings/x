export default ({ roles }) => {
  return <div>
    <h3>系统内置角色</h3>
    <table className='table table-striped table-hover'>
      <thead>
        <tr>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        {roles.map(role => <tr>
          <td>{role.name}</td>
        </tr>)}
      </tbody>
    </table>
  </div>
}
