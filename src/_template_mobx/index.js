import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'mobx-react'
import {AppContainer} from 'react-hot-loader'
import Layout from '../layout/containers/Layout'
import App from './containers/App'
import stores from './stores'

render(
  <AppContainer>
    <Layout>
      <Provider {...stores}>
        <App/>
      </Provider>
    </Layout>
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
