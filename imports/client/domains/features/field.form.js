import { form2js } from 'form2js'

export default ({ field, collection, that }) => {
  return <form onSubmit={submit({ collection, that })}>
    <div>
      <input type='text' name='name' defaultValue={field && field.name} required autoFocus />
    </div>
    <div>
      <textarea name='desc' rows='5' defaultValue={field && field.desc}></textarea>
    </div>
    <div>
      <input type='radio' name='type' defaultValue='text' required defaultChecked /> string
      <input type='radio' name='type' defaultValue='number' required /> number
    </div>
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
    Meteor.call('collections.add.field', collection._id, values, err => {
      if (err) return
      close({ that })()
    })
  }
}

function close ({ that }) {
  return function () {
    that.setState({ openFieldForm: !that.state.openFieldForm })
  }
}
