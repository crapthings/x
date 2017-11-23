import Wrapper from '../../wrapper'
import SystemLayout from '../layout'
import UsersView from './'

FlowRouter.route('/system/users', {
  action() {
    mount(Wrapper, {
      children: () => <SystemLayout children={() => <UsersView />} />
    })
  }
})
