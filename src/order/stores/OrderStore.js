import {observable, computed, action} from 'mobx'
import ajax from 'shared/ajax'
import localStorage from 'shared/localStorage'
import api from 'shared/api'
import stores from './index'

class OrderStore {
  @observable orders = []
  @observable pagination = {
    pageNum: 1,
    pageSize: 10,
    total: 0
  }


  @action updatePagination(pagination) {
    this.pagination = {
      ...this.pagination,
      ...pagination
    }
  }

  @action replaceOrders(orders) {
    this.orders = orders
  }

  async fetchOrders() {
    const res = await ajax({
      url: api.queryOrderList,
      raw: true,
      data: {
        ...stores.formStore.data,
        pageNum: this.pagination.pageNum,
        pageSize: this.pagination.pageSize,
        sellerListStatus: stores.tabsStore.key,
        shopId: localStorage.getItem('shopId')
      }
    })
    this.updatePagination({
      total: res.totalRecordSize
    })
    this.replaceOrders(res.entry)
  }

  async handleConfirm(data) {
    await ajax({
      url: '/api/handleConfirm',
      data
    })
  }

}

export default OrderStore
