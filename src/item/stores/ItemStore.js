import {observable,computed,action} from 'mobx'
import ajax from 'shared/ajax';
import api from 'shared/api';
import {getURLParams} from 'invincible';



// http://daily.manage.51xianqu.com/itemcenter/seller/open/getItemsByIds.do?itemIds=625980
class ItemStore {

  @observable itemInfo = {

  }



  @action replaceItem(item) {
    this.itemInfo = item
  }



  @action async fetchItem(callback) {
    const res = await ajax({
      url:api.queryItem,
      type:'get',
      data:{
        itemIds:getURLParams().itemId || '5622329'
      }
    });
    this.replaceItem(res[0]);
    callback && callback();
  }

  @action async save(ajaxData) {
    console.log(ajaxData);
  }

}

export default ItemStore


/*
"id": 625980,
    "itemName": "1分加多宝宝",
    "type": 0,
    "price": 5,
    "itemStatus": 100,
    "quantity": 768,
    "soldQuantity": null,
    "feature": "",
    "property": "瓶",
    "attributes": null,
    "unit": "1",
    "isDeleted": 0,
    "gmtCreate": "2015-12-16 10:48:27",
    "shopId": 4765,
    "onlineStartTime": null,
    "onlineEndTime": null,
    "onlineStatus": 0,
    "onlineShowTime": null,
    "buylimit": 5,
    "promotionPrice": 2,
    "promotionQuantity": null,
    "level": 9999,
    "modelId": null,
    "frontCatId": 39,
    "bigPicUrl": "n/03/10/1457588521302_5875.jpg",
    "adminComment": null,
    "brand": "加多宝",
    "barcode": "123456789",
    "outerId": "",
    "uploadUserId": null,
    "templateItemId": null,
    "lastOpUserId": 929476,
    "activityTags": 0,
    "gmtModify": "2017-01-20 16:44:51",
    "gmtTop": null,
    "spuId": 0,
    "propertyIds": "",
    "catId": 162,
    "picUrls": "n/03/10/1457588521302_5875.jpg",
    "description": "",
    "isSelf": 0,
    "templateItem": 0,
    "richDescription": "",
    "cornerMarkId": 0,
    "shelfLife": "",
    "productionDate": null,
    "msrp": null,
    "orderLimit": null,
    "isManageStock": 0,
    "browseQuantity": null,
    "daySoldQuantity": null,
    "monthSoldQuantity": 0,
    "isShow": 1,
    "isPresell": 0,
    "cornerMarkStr": null,
    "nearShelfLife": 0,
    "offlinePrice": 5,
    "offlineUserPrice": null,
    "purchasePrice": null,
    "minQuantity": 768,
    "groupName": null,
    "groupNo": 0,
    "deliveryTimeType": 2,
    "frontCatName": "咖啡饮料",
    "catName": "凉茶",
    "redisStock": null,
    "specialPriceName": null,
    "shopIds": null,
    "clientItemStatus": "online",
    "itemLabels": null,
    "actId": null,
    "actPrice": null,
    "platformSubsidy": null,
    "actLimitBuyNumber": null,
    "dayNumLimit": null,
    "remainLimit": null,
    "actStartDate": null,
    "actEndDate": null,
    "actStartTime": null,
    "actEndTime": null,
    "reviewStatus": null,
    "actCornerMarkId": null,
    "cornerMarkInfo": null,
    "cornerMarkUrl": null,
    "spuStatus": null,
    "canAddProperty": false,
    "itemStatus4Pos": "online",
    "attendActivity": false
*/
