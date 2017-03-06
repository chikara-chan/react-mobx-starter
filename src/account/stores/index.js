import {useStrict} from 'mobx'
import OrderStore from './OrderStore'

useStrict(true)

export default {
  orderStore: new OrderStore()
}
