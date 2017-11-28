import AppView from '../layout'
import SyslogsView from './'

FlowRouter.route('/syslogs', {
  action() {
    mount(AppView, {
      children: props => props.currentUser.inRoles(['system'])
        ? <SyslogsView { ...props } />
        : <Unauthorized />
    })
  }
})
