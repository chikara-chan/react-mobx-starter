import {observable,computed,action} from 'mobx'
import ajax from 'shared/ajax';



class BreadcrumbStore {

  @observable BreadcrumbConfig = [{
        name: '商品管理',
        href: '/'
      }];

  @action replaceConfig(newConfig) {
    this.BreadcrumbConfig = newConfig
  }
}

export default BreadcrumbStore


