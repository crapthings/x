import LoginLayout from './layout'
import LoginView from './'

FlowRouter.route('/login', {
  action() {
    mount(LoginLayout, {
      children: () => <LoginView />
    })
  }
})
