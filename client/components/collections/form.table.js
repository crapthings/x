import { form2js } from 'form2js'

export default ({ field, collection, that }) => {
  const { fields, _fields } = collection
  return <form onSubmit={submit({ collection, that })}>
    {fields.map(field => <div key={field}>
      <input type={_fields[field].type} name={field} />
    </div>)}
    <div>
      <input type='submit' value='提交' />
      <button onClick={close({ that })}>关闭</button>
    </div>
  </form>
}

function submit ({ collection, that }) {
  return function (evt) {
    evt.preventDefault()
    const values = form2js(evt.target)
    console.log(values)
    Meteor.call('data.create', collection._id, values, err => {
      if (err) return
      close({ that })()
    })
  }
}

function close ({ that }) {
  return function () {
    that.setState({ openForm: !that.state.openForm })
  }
}
