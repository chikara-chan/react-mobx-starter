import {observable,computed,action} from 'mobx'
import ajax from 'shared/ajax';
import api from 'shared/api';
import {getURLParams} from 'invincible';
import Index from './index';



class HandleStore {


  @observable selectedList = [];

  @action replaceSelectedList(newList) {
    this.selectedList = newList;
  }

  @action async deleteItem(itemIds) {
      if(!itemIds){
        itemIds = this.selectedList.join(',');
      }

      const res = await ajax({
        url:api.deleteItem,
        type:'get',
        data:{
          itemIds:itemIds
        }
      });
      Index.queryStore.fetchData();


  }

  @action async offlineItem() {
    const res = await ajax({
      url:api.offlineItem,
      type:'get',
      data:{
        itemIds:this.selectedList.join(',')
      }
    });
    Index.queryStore.fetchData();
  }

  @action async onlineItem() {

    const res = await ajax({
      url:api.onlineItem,
      type:'get',
      data:{
        itemIds:this.selectedList.join(','),
        status:100
      }
    });
    Index.queryStore.fetchData();
  }
  @action exportItem() {
    location.href = api.exportItem + localStorage.getItem('shopId');
  }

}

export default HandleStore

