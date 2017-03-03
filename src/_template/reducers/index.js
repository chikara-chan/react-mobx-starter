import {combineReducers} from 'redux'
import types from '../constants/ActionTypes'

function orders(state = [], action) {
  switch (action.type) {
    case types.REPLACE_ORDERS:
      return action.orders
    default:
      return state
  }
}

export default combineReducers({
  orders
})
