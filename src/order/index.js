import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'mobx-react'
import {AppContainer} from 'react-hot-loader'
import Layout from 'shared/components/Layout'
import App from './containers/App'
import stores from './stores'

render(
  <AppContainer>
    <Provider {...stores}>
      <Layout>
        <App/>
      </Layout>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
