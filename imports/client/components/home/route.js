import Wrapper from '../wrapper'
import SystemLayout from '../system/layout'

import HomeView from './'
import SystemView from '../system'

FlowRouter.route('/', {
  action() {
    mount(Wrapper, {
      children: ({ isAdmin }) => isAdmin
        ? <SystemLayout children={SystemView} />
        : <HomeView children={HomeView} />
    })
  }
})
