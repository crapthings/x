import LoginLayout from '../layout/login'
import LoginView from './'

FlowRouter.route('/login', {
  action() {
    mount(LoginLayout, {
      children: () => <LoginView />
    })
  }
})
