import {observable,computed,action} from 'mobx'
import ajax from 'shared/ajax';
import api from 'shared/api';
import {getURLParams} from 'invincible';

import Index from './index';



// http://daily.manage.51xianqu.com/itemcenter/seller/open/getItemsByIds.do?itemIds=625980
class QueryStore {

  @observable queryParams = {
    shopId:localStorage.getItem('shopId'),
    pageSize:10
  }



  @action replaceQueryParams(newParams) {
    var oldParams = this.queryParams;
    this.queryParams = {
      ...oldParams,
      ...newParams
    };
    this.fetchData();
  }



  @action async fetchData(callback) {
    const res = await ajax({
      url:api.queryItemList,
      type:'get',
      data:this.queryParams
    });
    Index.itemListStore.replaceList(res.itemList);
    Index.itemListStore.updateCount(res.totalCount);
    callback && callback();
  }

  @action async save(ajaxData) {
    console.log(ajaxData);
  }

}

export default QueryStore

