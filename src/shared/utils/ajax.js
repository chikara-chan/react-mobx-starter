import request from 'superagent'
import { message } from 'antd'

message.config({
  top: 63
})

/**
 * @param {Object} options
 * @return {Object} Return Promise
 */
function ajax(options) {
  const defaults = {
    url: null,
    type: 'post',
    data: {},
    raw: false  // 默认返回接口字段entry, 设置raw为true，返回全部字段
  }
  let promise, action

  options = Object.assign({}, defaults, options)
  promise = request[options.type](options.url).withCredentials()
  Object.keys(options).forEach(key => {
    if (!key.match(/url|type|data|raw/)) {
      promise.set(key, options[key])
    }
  })
  action = options.type === 'get' ? 'query' : 'send'

  return new Promise((resolve, reject) => {
    promise[action](options.data).then(res => {
      if (res.type === 'application/octet-stream') {
        resolve()

        return
      }
      if (!res.body.status) {
        if (res.body.responseCode === 10212) {
          location.href = `./member.html?redirect=${encodeURIComponent(location.href)}`
        }
        message.error(res.body.message)
        reject(new Error(res.body.message))

        return
      }
      if (options.raw) {
        resolve(res.body)

        return
      }
      resolve(res.body.entry)
    }).catch(err => {
      message.error('网络异常，操作失败')
      reject(err)
    })
  })
}

export default ajax
