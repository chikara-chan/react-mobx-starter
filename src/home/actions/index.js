import types from '../constants/ActionTypes'
import ajax from 'shared/ajax'
import api from 'shared/api'

function replaceShops(shops) {
  return {
    type: types.REPLACE_SHOPS,
    shops
  }
}

function fetchShops() {
  return dispatch => {
    ajax({
      url: api.queryShops,
      type: 'get'
    }).then(res => {
      dispatch(replaceShops(res))
    })

    const mock = []

    for (let i = 1; i < 20; i++) {
      mock.push({
        id: i,
        name: `店铺${i}`
      })
    }

    dispatch(replaceShops(mock))
  }
}

export default {
  fetchShops
}
