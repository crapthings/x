import { AdminMenu } from './menu'

const Who = ({ currentUser }) => {
  const symbol = _.first(_.toUpper(currentUser.username))
  return <div className='centered pdtb-md'>
    <figure className='avatar avatar-xl centered' data-initial={symbol}>
      <img src='img/avatar-1.png' alt=' ' />
      <i className='avatar-presence online'></i>
    </figure>
  </div>
}

const Menu = ({ currentUser, features }) => {
  const { roles: currentRoles } = currentUser

  if (_.intersection(currentRoles, ['system', 'users', 'contents']))
    return AdminMenu({ currentUser })

  return UserMenu({ currentUser, features })
}

export default ({ currentUser, roles, features, children }) => {
  return <div className='off-canvas'>
    <a className='off-canvas-toggle btn btn-primary btn-action' href='#sidebar-id'>
      <i className='icon icon-menu'></i>
    </a>

    <div id='sidebar-id' className='off-canvas-sidebar'>
      <Who currentUser={currentUser} />
      <Menu currentUser={currentUser} features={features} />
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
      {children({ currentUser, roles, features })}
    </div>
  </div>
}
