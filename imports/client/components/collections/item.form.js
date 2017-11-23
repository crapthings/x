import { form2js } from 'form2js'

export default ({ collection, that }) => {
  return <form onSubmit={submit({ collection, that })}>
    <div>
      <input type='text' name='name' defaultValue={collection.name} autoFocus />
    </div>
    <div>
      <textarea name='desc' rows='5' defaultValue={collection.desc}></textarea>
    </div>
    <div>
      <input type='submit' value='提交' />
      <button onClick={close({ that })}>关闭</button>
    </div>
  </form>
}

function submit ({ collection, that }) {
  console.log(collection, that)
  return function (evt) {
    evt.preventDefault()
    const values = form2js(evt.target)
    Meteor.call('collections.update', collection._id, values, err => {
      if (err) return
      close({ that })()
    })
  }
}

function close ({ that }) {
  return function () {
    that.setState({ openItemForm: !that.state.openItemForm })
  }
}
