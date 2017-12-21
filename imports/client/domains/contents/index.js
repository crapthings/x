import ContentsView from './view'

FlowRouter.route('/contents', {
  action() {
    mount(AppView, {
      children: props => <ContentsView { ...props } />
    })
  }
})
