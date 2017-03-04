import { observable, computed, action } from 'mobx'

class OrderStore {
  @observable orders = [
    {id: 1, ip: 'order1'},
    {id: 2, ip: 'order2'}
  ]

  @action replaceOrders(orders) {
    this.orders = orders
  }

}

export default OrderStore
