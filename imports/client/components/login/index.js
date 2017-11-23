export default () => <div>

  <form onSubmit={submit}>
    <div>
      <input type='text' name='username' required />
    </div>

    <div>
      <input type='password' name='password' required />
    </div>

    <div>
      <input type='submit' />
    </div>
  </form>

</div>

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
