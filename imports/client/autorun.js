Meteor.startup(function () {
  Meteor.autorun(function () {
    if (!Meteor.userId())
      FlowRouter.go('/')
  })
})
