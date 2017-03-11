import {observable,computed,action} from 'mobx'
import ajax from 'shared/ajax';
import api from 'shared/api';
import {getURLParams} from 'invincible';
import Index from './index';
import {message} from 'antd';



class HandleStore {


  @observable selectedList = [];

  @action replaceSelectedList(newList) {
    this.selectedList = newList;
  }

  showMsg(msg,type){
    message[type || 'success'](msg ||  '操作成功');
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
      this.showMsg();
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
    this.showMsg();
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
    this.showMsg();
    Index.queryStore.fetchData();
  }
  @action exportItem() {
    location.href = api.exportItem + localStorage.getItem('shopId');
  }

}

export default HandleStore

