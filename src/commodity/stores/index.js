import {useStrict} from 'mobx'
import ItemStore from './ItemStore'
import LoadingStore from './LoadingStore'
import BreadcrumbStore from './BreadcrumbStore'
import QueryStore from './QueryStore'
import ItemListStore from './ItemListStore'
import HandleStore from './HandleStore'



useStrict(true)

window.Stores = {
  itemStore: new ItemStore(),
  loadingStore: new LoadingStore(),
  breadcrumbStore: new BreadcrumbStore(),
  queryStore: new QueryStore(),
  itemListStore: new ItemListStore(),
  handleStore: new HandleStore()
}

export default Stores
