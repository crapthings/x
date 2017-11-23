const Nav = () => <ul>
  <li><a href='/'>home</a></li>
  <li><a href='/system/users'>users</a></li>
  <li><a onClick={() => Meteor.logout()} href='/'>logout</a></li>
</ul>

export default ({ children }) => <div>
  <Nav />
  {children()}
</div>
