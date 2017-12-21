import OffCanvas from './off-canvas'

export const MainLayout = props => {
  const { children } = props
  return <div className='off-canvas off-canvas-sidebar-show'>
    <a className='off-canvas-toggle btn btn-primary btn-action' href='#sidebar-id'>
      <i className='icon icon-menu'></i>
    </a>

    <OffCanvas {...props} />

    <a className='off-canvas-overlay' href='#close'></a>

    <div className='off-canvas-content' id='app-content'>
      {children(props)}
    </div>
  </div>
}

export const LoginLayout = ({ children }) => {
  return <div id='login-layout'>
    {children()}
  </div>
}
