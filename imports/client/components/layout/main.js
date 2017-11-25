const Who = ({ currentUser }) => {
  const symbol = _.first(_.toUpper(currentUser.username))
  return <div className='centered pdtb-md'>
    <figure className='avatar avatar-xl centered' data-initial={symbol}>
      <img src='img/avatar-1.png' alt=' ' />
      <i className='avatar-presence online'></i>
    </figure>
  </div>
}

const Menu = ({ currentUser, collections }) => {
  const { isAdmin } = currentUser

  if (isAdmin)
    return <ul className='menu'>
      <li className='menu-item'>
        <a href='/'>首页</a>
      </li>

      <li className='divider' />

      <li className='menu-item'>
        <a href='/roles'>角色</a>
      </li>

      <li className='divider' />

      <li className='menu-item'>
        <a href='/' onClick={() => Meteor.logout()}>注销</a>
      </li>
    </ul>

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

export default ({ children, currentUser, collections }) => {
  return <div className='off-canvas'>
    <a className='off-canvas-toggle btn btn-primary btn-action' href='#sidebar-id'>
      <i className='icon icon-menu'></i>
    </a>

    <div id='sidebar-id' className='off-canvas-sidebar'>
      <Who currentUser={currentUser} />
      <Menu currentUser={currentUser} collections={collections} />
    </div>

    <a className='off-canvas-overlay' href='#close'></a>

    <div className='off-canvas-content'>
      <header className='navbar'>
        <section className='navbar-section'>
          <a href='#' className='btn btn-link'>Docs</a>
          <a href='#' className='btn btn-link'>Examples</a>
        </section>
        <section className='navbar-center'>
        </section>
        <section className='navbar-section'>
          <a href='#' className='btn btn-link'>Twitter</a>
          <a href='#' className='btn btn-link'>GitHub</a>
        </section>
      </header>
      {children()}
    </div>
  </div>
}
