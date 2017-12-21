Meteor.startup(function () {
  Meteor.autorun(function () {
    if (!Meteor.userId() && FlowRouter.current().route.name !== 'login')
      FlowRouter.go('/')
  })
})
