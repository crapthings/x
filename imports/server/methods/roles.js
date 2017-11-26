methods({
  'create.role'(props) {
    Deny.roles(['system', 'users'])

    check(props, Object)

    const { name } = props

    if (Roles.findOne({ name }))
      throw new Meteor.Error('角色已存在')

    return Roles.insert({ name })
  }
})
