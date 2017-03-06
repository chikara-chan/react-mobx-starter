import {observable,computed,action} from 'mobx'
import ajax from 'shared/ajax';
import api from 'shared/api';
import {getURLParams} from 'invincible';



// http://daily.manage.51xianqu.com/itemcenter/seller/open/getItemsByIds.do?itemIds=625980
class LoadingStore {

  @observable isShowLoading = false;

  @action switchLoading(newStatus) {
    this.isShowLoading = newStatus
  }
}

export default LoadingStore


