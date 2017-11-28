publish('syslogs', function () {
  console.log(asdasaksjelaksjelkj)
  return Syslogs.find({}, { sort: { createdAt: -1 } })
})
