import { LoginLayout } from '../../components/layout'
import LoginView from './view'

FlowRouter.route('/login', {
  action() {
    mount(LoginLayout, {
      children: () => <LoginView />
    })
  },

  name: 'login'
})
