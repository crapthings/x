export default () => {
  return <div className='center' id='login-view'>
    <form onSubmit={submit}>

      <div className='form-group'>
        <label className='form-label' htmlFor='username'>账号</label>
        <input className='form-input' type='text' name='username' id='username' placeholder='邮箱账号或用户名' autoComplete='new-password' />
      </div>

      <div className='form-group'>
        <label className='form-label' htmlFor='password'>密码</label>
        <input className='form-input' type='password' name='password' id='password' placeholder='密码' autoComplete='new-password' />
      </div>

      <div className='form-group'>
        <button className='btn btn-primary'>登录</button>
      </div>

    </form>
  </div>
}

function submit (evt) {
  evt.preventDefault()
  const data = form2js(evt.target)
  const username = _.trim(data.username)
  const password = _.trim(data.password)

  if (! username && ! password)
    return

  Meteor.loginWithPassword(username, password, err => {
    if (err)
      return console.log(err)

    FlowRouter.go('/')
  })
}
