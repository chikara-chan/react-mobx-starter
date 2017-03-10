function getOuterURL(url) {
  // 本地环境
  if (~location.host.indexOf('dev.') || ~location.host.indexOf('dev.')) {
    return `http://daily.52shangou.com${url}`
  }
  // return `http://manage.51xianqu.com${url}`
  return `http://${document.domain}${url}`
}

export default {
  login: getOuterURL('/member/login.do'),
  logout: getOuterURL('/member/logout.do'),
  queryOrderList: getOuterURL('/trade/caihaohuo/order/queryOrderList'),
  sendOrder: getOuterURL('/trade/caihaohuo/order/sendOrder'),
  queryItem: getOuterURL('/itemcenter/seller/open/getItemsByIds.do'),
  uploadImage:getOuterURL('/itemcenter/upload/server?minWidth=750&wDivH-min=1.0&wDivH-max=1.0'),
  queryItemList:getOuterURL('/itemcenter/seller/item/list.jsonp'),
  deleteItem:getOuterURL('/itemcenter/seller/open/delItem.do'),
  offlineItem:getOuterURL('/itemcenter/seller/open/offonlineItem.do'),
  onlineItem:getOuterURL('/itemcenter/seller/open/auditItem.do'),
  exportItem:getOuterURL('/itemcenter/seller/item/exportShopItemExcel?shopId='),
  saveItem:getOuterURL('/itemcenter/seller/open/addOrUpdateItem'),
  resetPassword:getOuterURL('/member/resetSellerPwd.do')
}
