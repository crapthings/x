import AppView from '../layout'
import AccountsView from './'

FlowRouter.route('/accounts', {
  action() {
    mount(AppView, {
      children: props => <AccountsView { ...props } />
    })
  }
})
