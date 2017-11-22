import Layout from '../layout'
import Index from './'

FlowRouter.route('/', {
  action() {
    mount(Layout, {
      children: () => <Index />
    })
  }
})
