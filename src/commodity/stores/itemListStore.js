import {observable,computed,action} from 'mobx'
import ajax from 'shared/ajax';
import api from 'shared/api';
import {getURLParams} from 'invincible';



class ItemListStore {

  @observable itemList = [];

  @observable totalCount = 0;



  @action replaceList(newList) {
    this.itemList = newList;
  }

  @action updateCount(newCount) {
    this.totalCount = newCount;
  }



}

export default ItemListStore

