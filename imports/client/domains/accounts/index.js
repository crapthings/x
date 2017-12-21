import AccountsView from './view'

FlowRouter.route('/accounts', {
  action() {
    mount(AppView, {
      children: props => props.currentUser.inAdminRoles()
        ? <AccountsView { ...props } />
        : <Unauthorized />
    })
  }
})
