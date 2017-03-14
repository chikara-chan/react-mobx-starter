import {observable,computed,action} from 'mobx'
import ajax from 'shared/ajax';
import api from 'shared/api';
import {getURLParams} from 'invincible';
import Index from './index';
import {message} from 'antd';



class HandleStore {


  @observable selectedList = [];

  @computed get length() {
    return this.selectedList.length
  }

  @action replaceSelectedList(newList) {
    this.selectedList = newList;
  }

  @action clearSelectedList() {
    this.selectedList.length = 0;
  }


  showMsg(msg,type){
    message[type || 'success'](msg ||  '操作成功');
  }

  @action async deleteItem(itemIds) {
      var len = 1;
      var isSingleDelete = !!itemIds;
      if(!itemIds){
        len = this.selectedList.length;
        itemIds = this.selectedList.join(',');
        isSingleDelete = false;
      }
      const res = await ajax({
        url:api.deleteItem,
        type:'get',
        data:{
          itemIds:itemIds
        }
      });
      // this.selectedList = [];
      this.clearSelectedList();

      !isSingleDelete && this.showMsg(`${len}个商品已经全部删除`);
      Index.queryStore.fetchData();


  }

  @action async offlineItem(msg) {
    var len = this.selectedList.length;
    const res = await ajax({
      url:api.offlineItem,
      type:'get',
      data:{
        itemIds:this.selectedList.join(',')
      }
    });
    this.showMsg(`${len}个商品已经全部下架`);
    Index.queryStore.fetchData();
  }

  @action async onlineItem(msg) {
    var len = this.selectedList.length;
    const res = await ajax({
      url:api.onlineItem,
      type:'get',
      data:{
        itemIds:this.selectedList.join(','),
        status:100
      }
    });
    this.showMsg(`${len}个商品已经全部下架`);
    Index.queryStore.fetchData();
  }
  @action exportItem() {
    location.href = api.exportItem + localStorage.getItem('shopId');
  }

}

export default HandleStore

