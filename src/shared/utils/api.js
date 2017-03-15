function getOuterURL(url) {
  // 本地环境
  if (~location.host.indexOf('dev.') || ~location.host.indexOf('daily.')) {
    return `http://daily.52shangou.com${url}`
  }
  // return `http://manage.51xianqu.com${url}`
  return `http://${document.domain}${url}`
}

export default {
  queryOrderList: getOuterURL('/trade/seller/caihaohuo/queryOrderList')
}
