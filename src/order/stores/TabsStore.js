import {observable, computed, action} from 'mobx'
import ajax from 'shared/ajax'

class TabsStore {
  @observable key = '0'

  @action replaceKey(key) {
    this.key = key
  }
}

export default TabsStore
