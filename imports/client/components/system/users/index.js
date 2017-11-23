import ActionComponent from './action'
import TableComponent from './table'
import FormComponent from './form'

export default class ViewComponent extends Component {
  state = {
    openForm: false
  }

  render() {
    const { openForm } = this.state
    return <div>
      <ActionComponent that={this} />
      <TableComponent that={this} />
      {openForm && <FormComponent that={this} />}
    </div>
  }
}
