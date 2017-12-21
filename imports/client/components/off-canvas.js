const UserMenu = ({ currentUser, features }) => {
  return <ul className='menu'>
    <li className='menu-item'>
      <a href='/'>首页</a>
    </li>
    {features.map(feature => <li className='menu-item'>
      <a href='/'>{feature.name}</a>
    </li>)}

    <li className='divider' />

    <li className='menu-item'>
      <a href='/' onClick={() => Meteor.logout()}>注销</a>
    </li>
  </ul>
}

const AdminMenu = ({ currentUser }) => {
  return <ul className='menu'>
    <li className='menu-item'>
      <a href='/'>首页</a>
    </li>

    <li className='divider' />

    <li className='menu-item'>
      <a href='/roles'>角色</a>
    </li>

    <li className='menu-item'>
      <a href='/accounts'>账号</a>
    </li>

    <li className='menu-item'>
      <a href='/contents'>内容</a>
    </li>

    <li className='menu-item'>
      <a href='/features'>功能</a>
    </li>

    <li className='divider' />

    <li className='menu-item'>
      <a href='/syslogs'>日志</a>
    </li>

    <li className='divider' />

    <li className='menu-item'>
      <a href='/' onClick={() => Meteor.logout()}>注销</a>
    </li>
  </ul>
}

const Who = ({ currentUser }) => {
  return <div className='centered pdtb-md'>
    <figure className='avatar avatar-xl centered' data-initial={currentUser.firstNameLetter()}>
      {currentUser.avatar && <img src={currentUser.avatar} alt='...' />}
      <i className='avatar-presence online'></i>
    </figure>
  </div>
}

const Menu = ({ currentUser, features }) => {
  if (currentUser.inAdminRoles())
    return AdminMenu({ currentUser })

  return UserMenu({ currentUser, features })
}

export default props => {
  return (
    <div id='sidebar-id' className='off-canvas-sidebar'>
      <Who {...props} />
      <Menu {...props} />
    </div>
  )
}
