import { schema } from '/imports/collections/roles'

export default ({ active }) => <div>
  <div className={`modal ${active}`} id='example-modal-1'>
    <a href='#close' className='modal-overlay' aria-label='Close'></a>
    <div className='modal-container'>
      <div className='modal-header'>
        <a href='#close' className='btn btn-clear float-right' aria-label='Close'></a>
        <div className='modal-title h5'>Modal title</div>
      </div>
      <div className='modal-body'>
        <div className='content'>
          <form className='form-horizontal' onSubmit={submit}>
            {_.map(schema, (field, fieldName) => <div className='form-group'>
              <div className='col-3'>
                <label className='form-label' htmlFor='input-example-1'>{field.label}</label>
              </div>
              <div className='col-9'>
                <input className='form-input' type={field.inputType} name={fieldName} id='input-example-1' placeholder={field.inputPlaceholder || field.label} />
              </div>
            </div>)}
            <div class="form-group">
              <button class="btn btn-primary">提交</button>
            </div>
          </form>
        </div>
      </div>
      <div className='modal-footer'></div>
    </div>
  </div>
</div>

function submit (evt) {
  evt.preventDefault()
  const fields = form2js(evt.target)
  Meteor.call('insert', 'roles', fields)
  FlowRouter.go('/roles#close')
}
