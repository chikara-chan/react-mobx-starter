import React from 'react'
import {render} from 'react-dom'
import configureStore from '../layout/store/configureStore'
import Layout from '../layout/containers/Root'
import reducers from './reducers'
import App from './containers/App'

const store = configureStore(reducers)

render(
  <Layout store={store}>
    <App/>
  </Layout>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
