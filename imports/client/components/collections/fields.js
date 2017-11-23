import { withTracker } from 'meteor/react-meteor-data'

import FieldForm from './field.form.js'

const FieldAction = ({ collection, that }) => <div>
  <button onClick={() => that.setState({ openFieldForm: true })}>创建字段</button>
</div>


class FieldsView extends Component {
  state = {
    openFieldForm: false
  }

  render () {
    const { collection } = this.props
    return <div>
      <FieldAction collection={collection} that={this} />
      {this.state.openFieldForm && <FieldForm field={{}} collection={collection} that={this} />}
      <ul>
        {collection.fields.map(field => <li key={field}>
          {collection._fields[field].type} - {collection._fields[field].name} - {collection._fields[field].desc}
        </li>)}
      </ul>
    </div>
  }
}

export default FieldsView
