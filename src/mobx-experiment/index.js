import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'mobx-react'
import Layout from '../layout/containers/Layout'
import App from './containers/App'
import stores from './stores'

render(
  <Layout>
    <Provider {...stores}>
      <App/>
    </Provider>
  </Layout>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
