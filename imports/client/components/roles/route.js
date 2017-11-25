import Layout from '../layout'

FlowRouter.route('/roles', {
  action() {
    mount(Layout, {
      children: () => <div>roles</div>
    })
  }
})
