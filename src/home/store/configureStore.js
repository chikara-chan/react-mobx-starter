if (process.env.NODE_ENV === 'production') {
  module.exports = require('home/store/configureStore.prod')
} else {
  module.exports = require('home/store/configureStore.dev')
}
