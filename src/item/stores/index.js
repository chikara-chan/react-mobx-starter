import {useStrict} from 'mobx'
import ItemStore from './ItemStore'
import LoadingStore from './LoadingStore'


useStrict(true)

export default {
 itemStore: new ItemStore(),
 loadingStore:new LoadingStore()
}
