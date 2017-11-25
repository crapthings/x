export const UserMenu = ({ currentUser, features }) => {
  return <ul className='menu'>
    <li className='menu-item'>
      <a href='/'>首页</a>
    </li>
    {collections.map(collection => <li className='menu-item'>
      <a href='/'>{collection.name}</a>
    </li>)}

    <li className='divider' />

    <li className='menu-item'>
      <a href='/' onClick={() => Meteor.logout()}>注销</a>
    </li>
  </ul>
}

export const AdminMenu = ({ currentUser }) => {
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
      <a href='/' onClick={() => Meteor.logout()}>注销</a>
    </li>
  </ul>
}
