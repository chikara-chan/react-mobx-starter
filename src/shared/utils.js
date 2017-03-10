function wrapPicURL(url) {
  return `http://imgsize.52shangou.com/img/${url}`
}

const mapOrderStatus = {
  2: '待发货',
  3: '已发货',
  5: '已取消'
}



export default {
  wrapPicURL,
  mapOrderStatus
}
