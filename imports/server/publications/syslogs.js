publish('syslogs', function () {
  return Syslogs.find({}, { sort: { createdAt: -1 } })
})
