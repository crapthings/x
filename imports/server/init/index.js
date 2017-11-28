Roles.remove({})
Users.remove({})
Features.remove({})
Activities.remove({})

Meteor.startup(function () {

  const systemRole = { _id: 'system', name: '系统管理员' }
  const usersRole = { _id: 'users', name: '用户管理员' }
  const contentsRole = { _id: 'contents', name: '内容管理员' }

  const roles = [systemRole, usersRole, contentsRole]

  _.each(roles, createRolesAndUsers)

  !Users.findOne({ username: 'test' }) && Accounts.createUser({
    username: 'test',
    password: 'test',
    name: '测试账号',
    roles: ['test'],
  })

})

function createRolesAndUsers(role) {
  if (Roles.findOne(role))
    return

  const roles = [Roles.insert(role)]

  Accounts.createUser({
    username: role._id,
    password: role._id,
    roles
  })
}
