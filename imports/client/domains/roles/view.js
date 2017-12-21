import RoleForm from './form'
import { schema } from '/imports/collections/roles'

class RolesView extends Component {
  render() {
    const { roles, builtInRoles, customRoles } = this.props
    return (
      <div className='panel'>
        <div className='panel-header'>
          <div className='panel-title h3'>角色管理</div>
        </div>

        <div className='panel-nav'>
          <a href='#example-modal-1' className='btn btn-primary btn-sm'>新角色</a>
          <RoleForm />
        </div>

        <div className='panel-body'>
          <div>
            {roles.length ? <table className='table table-striped table-hover'>
              <thead>
                <tr>
                  {_.map(schema, (field, fieldname) => <th key={fieldname+'th'}>{field.label}</th>)}
                </tr>
              </thead>
              <tbody>
                {roles.map(role => <tr key={role._id}>
                  {_.map(schema, (field, fieldname) => <th key={fieldname}>{role[fieldname]}</th>)}
                </tr>)}
              </tbody>
            </table> : <EmptyView />}
          </div>
        </div>

        <div className='panel-footer'>
        </div>
      </div>
    )
  }
}

export default RolesView
