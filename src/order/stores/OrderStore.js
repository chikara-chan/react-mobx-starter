import {observable, computed, action} from 'mobx'
import ajax from 'shared/utils/ajax'
import api from 'shared/utils/api'
import stores from './index'

class OrderStore {
  @observable orders = [{
    id: 1,
    name: 'order1'
  }, {
    id: 2,
    name: 'order2'
  },]

  @action replaceOrders(orders) {
    this.orders = orders
  }

  async fetchOrders() {
    const res = await ajax({
      url: api.queryOrderList,
      data: stores.formStore.data
    })
    this.replaceOrders(res.entry)
  }
}

export default OrderStore
