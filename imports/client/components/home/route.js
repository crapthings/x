import AppView from '../layout'
import HomeView from './'

FlowRouter.route('/', {
  action() {
    mount(AppView, {
      children: () => <HomeView />
    })
  }
})
