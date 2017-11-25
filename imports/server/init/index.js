Meteor.startup(function () {

  const systemRole = { _id: 'system', name: '系统管理员' }
  const usersRoles = { _id: 'users', name: '用户管理员' }
  const contentsRoles = { _id: 'contents', name: '内容管理员' }

  const roles = [systemRole, usersRoles, contentsRoles]

  _.each(roles, createRolesAndUsers)

})

function createRolesAndUsers(role) {
  if (Roles.findOne(role)) return

  const roles = [Roles.insert(role)]

  Accounts.createUser({
    username: role._id,
    password: role._id,
    roles
  })
}
