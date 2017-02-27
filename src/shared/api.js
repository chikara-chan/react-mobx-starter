function getOuterURL(url) {
  // 本地环境
  if (~location.host.indexOf('dev.')) {
    return `http://daily.manage.51xianqu.com${url}`
  }

  // 线上环境
  else {
    return `http://${document.domain}${url}`
  }
}

export default {
  queryOrders: getOuterURL('/api/queryOrders')
}
