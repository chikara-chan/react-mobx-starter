import {combineReducers} from 'redux'
import types from '../constants/ActionTypes'

const initialShops = []

function shops(state = initialShops, action) {
  switch (action.type) {
    case types.REPLACE_SHOPS:
      return action.shops
    default:
      return state
  }
}

export default combineReducers({
  shops
})
