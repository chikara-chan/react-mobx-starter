function wrapPicURL(url) {
  return `http://imgsize.52shangou.com/img/${url}`
}

const mapOrderStatus = {
  0: '待接单',
  1: '已接单'
}



export default {
  wrapPicURL,
  mapOrderStatus
}
