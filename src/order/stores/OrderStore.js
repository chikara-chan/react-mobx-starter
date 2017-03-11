import {observable, computed, action} from 'mobx'
import ajax from 'shared/ajax'
import localStorage from 'shared/localStorage'
import api from 'shared/api'
import stores from './index'
import {message} from 'antd'

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
      url: api.sendOrder,
      data
    })

    message.success('发货成功')
    this.fetchOrders()
  }

  async handleExport(data) {
    await ajax({
      url: api.export,
      type: 'get',
      data
    })
  }
}

export default OrderStore
