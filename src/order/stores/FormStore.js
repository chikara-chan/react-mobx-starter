import {observable, computed, action} from 'mobx'
import ajax from 'shared/ajax'

class FormStore {
  @observable data = {}

  @action replaceData(data) {
    this.data = data
  }
}

export default FormStore
