import { withTracker } from 'meteor/react-meteor-data'
import TableForm from './form.table'

const TableAction = ({ collection, that }) => <div>
  <button onClick={() => that.setState({ openForm: true })}>创建内容</button>
</div>

const tracker = ({ _id }) => {
  const subscribe = Meteor.subscribe('collections.view', { _id }).ready()
  if (subscribe) {
    const collection = _Collections.findOne(_id)
    const dataset = Mongo.Collection.get(_id).find().fetch()
    return { subscribe, collection, dataset }
  }

  return { subscribe }
}

class component extends Component {
  state = {
    openForm: false,
  }

  render () {
    const { openForm } = this.state
    const { subscribe, collection, dataset } = this.props

    if (! subscribe)
      return <div>loading</div>

    return <div>
      <TableAction collection={collection} that={this} />
      {openForm && <TableForm collection={collection} that={this} />}
      <table>
        <thead>
          <tr>
            {collection.fields.map(field => <th key={field}>
              {collection._fields[field].name}
            </th>)}
          </tr>
        </thead>
        <tbody>
          {dataset.map((data, dataIdx) => <tr key={dataIdx}>
            {collection.fields.map(field => <th key={field + dataIdx}>
              {data[field]}
            </th>)}
          </tr>)}
        </tbody>
      </table>
    </div>
  }
}

export default withTracker(tracker)(component)
