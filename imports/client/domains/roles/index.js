import RolesView from './view'

FlowRouter.route('/roles', {
  action() {
    mount(AppView, {
      children: props => <RolesView { ...props } />
    })
  },
  name: 'roles'
})

FlowRouter.route('/roles/new', {
  action() {
    mount(AppView, {
      children: props => <RolesView { ...props } />
    })
  },
  name: 'roles.new'
})
