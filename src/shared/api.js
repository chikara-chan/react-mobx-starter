function getOuterURL(url) {
  // 本地环境
  if (~location.host.indexOf('dev.')) {
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
  uploadImage:getOuterURL('/itemcenter/upload/server?notParseJpg=1'),
  queryItemList:getOuterURL('/itemcenter/seller/item/list.jsonp')
}
