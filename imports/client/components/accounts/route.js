import AppView from '../layout'
import AccountsView from './'

FlowRouter.route('/accounts', {
  action() {
    mount(AppView, {
      children: props => props.currentUser.inAdminRoles()
        ? <AccountsView { ...props } />
        : <Unauthorized />
    })
  }
})
