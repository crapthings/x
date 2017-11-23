export default ({ that }) => <form onSubmit={submit({ that })}>
  <div>
    <input type='text' name='username' />
  </div>

  <div>
    <input type='password' name='password' />
  </div>

  <div>
    <input type='submit' />
  </div>
</form>

function submit({ that }) {
  return function (evt) {
    evt.preventDefault()
    const data = form2js(evt.target)
    console.log(data)
    Meteor.call('create.user', data, err => !err && that.setState({ openForm: false }))
  }
}
