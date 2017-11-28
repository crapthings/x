import { schema } from '/imports/collections/roles'
console.log(schema)

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

        </div>
      </div>
      <div className='modal-footer'>
        ...
      </div>
    </div>
  </div>
</div>
