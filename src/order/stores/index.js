import {useStrict} from 'mobx'
import OrderStore from './OrderStore'
import FormStore from './FormStore'
import TabsStore from './TabsStore'

useStrict(true)

export default {
  orderStore: new OrderStore(),
  formStore: new FormStore(),
  tabsStore: new TabsStore()
}
