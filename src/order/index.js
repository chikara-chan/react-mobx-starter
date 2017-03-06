import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'mobx-react'
import {AppContainer} from 'react-hot-loader'
import BreadcrumbLayout from 'shared/components/BreadcrumbLayout'
import Layout from '../layout/containers/Layout'
import App from './containers/App'
import stores from './stores'

render(
  <AppContainer>
    <Provider {...stores}>
      <Layout>
        <BreadcrumbLayout titles={[{
          name: '订单管理',
          href: '/'
        }]}>
          <App/>
        </BreadcrumbLayout>
      </Layout>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
