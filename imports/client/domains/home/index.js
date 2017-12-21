import HomeView from './view'

FlowRouter.route('/', {
  action() {
    mount(AppView, {
      children: () => <HomeView />
    })
  },

  name: 'home',
})
