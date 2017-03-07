import {useStrict} from 'mobx'
import ItemStore from './ItemStore'
import LoadingStore from './LoadingStore'
import BreadcrumbStore from './BreadcrumbStore'


useStrict(true)

window.selfStore = {
  itemStore: new ItemStore(),
  loadingStore: new LoadingStore(),
  breadcrumbStore: new BreadcrumbStore()
}

export default selfStore
