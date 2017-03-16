import { useStrict } from 'mobx'
import OrderStore from './OrderStore'
import FormStore from './FormStore'

useStrict(true)

export default {
  orderStore: new OrderStore(),
  formStore: new FormStore()
}
