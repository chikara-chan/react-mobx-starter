import {useStrict} from 'mobx'
import OrderStore from './OrderStore'
import TabsStore from './TabsStore'

useStrict(true)

export default {
  orderStore: new OrderStore(),
  tabsStore: new TabsStore()
}
