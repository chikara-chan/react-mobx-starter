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
    pageSize: 10
  }
  @observable total = {
    '2': 0,
    '3': 0,
    '5': 0
  }
  @observable loading = false

  @action updatePagination(pagination) {
    this.pagination = {
      ...this.pagination,
      ...pagination
    }
  }

  @action updateTotal(total) {
    this.total = {
      ...this.total,
      ...total
    }
  }

  @action updateLoading(loading) {
    this.loading = loading
  }

  @action replaceOrders(orders) {
    this.orders = orders
  }

  async fetchOrders() {
    this.updateLoading(true)
    const res = await ajax({
      url: api.queryOrderList,
      raw: true,
      data: {
        ...stores.formStore.data,
        pageNum: this.pagination.pageNum,
        pageSize: this.pagination.pageSize,
        sellerListStatus: stores.tabsStore.key === '5' ? '7' :
          stores.tabsStore.key === '3' ? '345' :
          stores.tabsStore.key,
        shopId: localStorage.getItem('shopId')
      }
    })
    this.updateTotal({
      [stores.tabsStore.key]: res.totalRecordSize
    })
    this.replaceOrders(res.entry)
    this.updateLoading(false)
  }

  async handleConfirm(data) {
    await ajax({
      url: api.sendOrder,
      data
    })

    message.success('发货成功')
    this.fetchOrders()
  }

  async handleExport(search) {
    location.href = `${api.export}?${search}`
  }
}

export default OrderStore
