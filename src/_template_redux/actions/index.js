import types from '../constants/ActionTypes'
import ajax from 'shared/ajax'
import api from 'shared/api'

function replaceOrders(orders) {
  return {
    type: types.REPLACE_ORDERS,
    orders
  }
}

function fetchOrders() {
  return dispatch => {
    ajax({
      url: api.queryOrders,
      type: 'get'
    }).then(res => {
      dispatch(replaceOrders(res))
    })
  }
}

export default {
  fetchOrders
}
