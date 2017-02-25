import React from 'react'
import {render} from 'react-dom'
import configureStore from '../common/store/configureStore'
import Common from '../common/containers/Root'
import reducers from './reducers'
import App from './containers/App'

const store = configureStore(reducers)

render(
  <Common store={store}>
    <App/>
  </Common>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App')
    render(
      <Common store={store}>
        <NextApp/>
      </Common>,
      document.getElementById('root')
    )
  })
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers'))
  })
}
