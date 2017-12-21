import AppView from '../../layout'
import SystemLayout from '../layout'
import UsersView from './'

FlowRouter.route('/system/users', {
  action() {
    mount(AppView, {
      children: () => <SystemLayout children={() => <UsersView />} />
    })
  }
})
