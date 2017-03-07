function getOuterURL(url) {
  // 本地环境
  if (~location.host.indexOf('dev.')) {
    return `http://daily.manage.51xianqu.com${url}`
  }
  // return `http://manage.51xianqu.com${url}`
  return `http://${document.domain}${url}`
}

export default {
  queryOrders: getOuterURL('/api/queryOrders'),
  queryItem: getOuterURL('/itemcenter/seller/open/getItemsByIds.do'),
  uploadImage:getOuterURL('/itemcenter/upload/server?notParseJpg=1'),
  queryItemList:getOuterURL('/itemcenter/seller/item/list.jsonp')
}
