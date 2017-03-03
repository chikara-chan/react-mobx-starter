import {combineReducers} from 'redux'
import types from '../constants/ActionTypes'

function shops(state = [], action) {
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
