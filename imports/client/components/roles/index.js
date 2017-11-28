import RoleForm from './form'

class RolesView extends Component {
  state = {
    modalStatus: null
  }

  render() {
    const { roles } = this.props
    return <div>
      <h3>系统内置角色</h3>
      <a href="#example-modal-1" class="btn btn-primary btn-sm">新角色</a>
      <RoleForm />
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
}

export default RolesView
