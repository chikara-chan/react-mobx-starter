import {observable, computed, action} from 'mobx'
import ajax from 'shared/ajax'

class OrderStore {
  @observable orders = [{
    id: 1,
    name: 'order'
  }]

  @computed get length() {
    return this.orders.length
  }

  @action replaceOrders(orders) {
    this.orders = orders
  }

  @action async fetchOrders() {
    const res = await ajax()

    this.replaceOrders(res)
  }

}

export default OrderStore
