import RoleForm from './form'
import { schema } from '/imports/collections/roles'

class RolesView extends Component {
  state = {
    modalStatus: null
  }

  render() {
    const { roles, builtInRoles, customRoles } = this.props
    return <div>
      <a href="#example-modal-1" className="btn btn-primary btn-sm">新角色</a>

      <h3>用户自定角色</h3>
      <RoleForm />
      {customRoles.length ? <table className='table table-striped table-hover'>
        <thead>
          <tr>
            {_.map(schema, (field, fieldname) => <th>{field.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {customRoles.map(role => <tr key={role._id}>
            {_.map(schema, (field, fieldname) => <th key={fieldname}>{role[fieldname]}</th>)}
          </tr>)}
        </tbody>
      </table> : <EmptyView />}

      <h3>系统内置角色</h3>
      <RoleForm />
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            {_.map(schema, (field, fieldname) => <th key={fieldname}>{field.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {builtInRoles.map(role => <tr key={role._id}>
            {_.map(schema, (field, fieldname) => <th key={fieldname}>{role[fieldname]}</th>)}
          </tr>)}
        </tbody>
      </table>
    </div>
  }
}

export default RolesView
