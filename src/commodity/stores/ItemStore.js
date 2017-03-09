import {observable,computed,action} from 'mobx'
import ajax from 'shared/ajax';
import api from 'shared/api';
import {getURLParams} from 'invincible';
import {message} from 'antd';



// http://daily.manage.51xianqu.com/itemcenter/seller/open/getItemsByIds.do?itemIds=625980
class ItemStore {

  @observable itemInfo = {

  }



  @action replaceItem(newItem) {
    this.itemInfo = {
      ...this.itemInfo,...newItem
    }
  }



  @action async fetchItem(itemId,callback) {
    const res = await ajax({
      url:api.queryItem,
      type:'get',
      data:{
        itemIds:itemId
      }
    });
    this.replaceItem(res[0]);
    callback && callback();
  }

  // 编辑商品只能上传这么多字段，其他要剔除
  formatSaveData(){
    var newData = {};
    var needKey = ['id','itemName','type','price','itemStatus','quantity','feature',
    'property','unit','shopId','bigPicUrl','brand','barcode','spuId','catId','picUrls','orderLimit'];
    for(var key in this.itemInfo){
      if(needKey.indexOf(key) > -1){
        newData[key] = this.itemInfo[key];
      }
    }
    return newData;
  }

  @action async saveItem() {
    const res = await ajax({
      url:api.saveItem,
      data:this.formatSaveData()
    });
    this.replaceItem(res[0]);
    message.success('保存成功');
  }

}

export default ItemStore

