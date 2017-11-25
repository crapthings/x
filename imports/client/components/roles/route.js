import AppView from '../layout'
import RolesView from './'

FlowRouter.route('/roles', {
  action() {
    mount(AppView, {
      children: props => <RolesView { ...props } />
    })
  }
})
