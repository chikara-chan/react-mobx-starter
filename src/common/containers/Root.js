if (process.env.NODE_ENV === 'production') {
  module.exports = require('common/containers/Root.prod')
} else {
  module.exports = require('common/containers/Root.dev')
}
