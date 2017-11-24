const Nav = () => <ul className='menu'>
  <li className='divider' data-content='LINKS'>
  </li>
  <li className='menu-item'>
    <a href='#'>
      <i className='icon icon-link'></i> Slack
    </a>
  </li>
  <li className='divider'></li>
  <li className='menu-item'>
    <div className='menu-badge'>
      <label className='label label-primary'>2</label>
    </div>
    <a href='#'>
      <i className='icon icon-link'></i> Settings
    </a>
  </li>
</ul>

export default ({ children }) => <div>
  <Nav />
  {children()}
</div>
