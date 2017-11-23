import { withTracker } from 'meteor/react-meteor-data'
import ItemForm from './item.form.js'

import FieldsView from './fields'

const removeCollection = _id => evt => confirm('确定要删除吗') && Meteor.call('collections.remove', _id, err => !err && FlowRouter.go('/'))

const ItemDetail = ({ collection }) => <div>
  <div>
    collection name: {collection.name}
  </div>
  <div>
    collection desc: {collection.desc}
  </div>
</div>

const ItemAction = ({ collection, that }) => <div>
  <button onClick={() => that.setState({ openItemForm: true })}>更新</button>
  <button onClick={removeCollection(collection._id)}>删除</button>
</div>

class ItemView extends Component {
  state = {
    openItemForm: false
  }

  render () {
    const { openItemForm } = this.state
    const { collection } = this.props
    return <div>
      {openItemForm && <ItemForm collection={collection} that={this} />}
      <ItemAction collection={collection} that={this} />
      <ItemDetail collection={collection} />
      <FieldsView collection={collection} />
    </div>
  }
}

const tracker = ({ _id }) => {
  const collection = Collections.findOne(_id)
  return { collection }
}

const component = ({ collection }) => {
  return collection ? <div>
    <ItemView collection={collection} />
  </div> : <div>empty</div>
}

export default withTracker(tracker)(component)
