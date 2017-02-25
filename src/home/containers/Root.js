if (process.env.NODE_ENV === 'production') {
  module.exports = require('home/containers/Root.prod')
} else {
  module.exports = require('home/containers/Root.dev')
}
