import Layout from '../layout'
import { List, Item, Table } from './'

FlowRouter.route('/collections', {
  action() {
    mount(Layout, {
      children: () => <List />
    })
  }
})

FlowRouter.route('/collections/:_id', {
  action({ _id }) {
    mount(Layout, {
      children: () => <Item _id={_id} />
    })
  }
})

FlowRouter.route('/view/collections/:_id', {
  action({ _id }) {
    mount(Layout, {
      children: () => <Table _id={_id} />
    })
  }
})
