import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'mobx-react'
import {AppContainer} from 'react-hot-loader'
import Layout from '../layout/containers/Layout'
import App from './containers/App'
import stores from './stores'
import BreadcrumbLayout from 'shared/components/BreadcrumbLayout'


render(
  <AppContainer>
    <Layout>
      <Provider {...stores}>
        <BreadcrumbLayout titles={[{
          name: '标题1',
          href: '/'
        }, {
          name: '标题2',
          href: '/'
        }]}>
          <App/>
        </BreadcrumbLayout>
      </Provider>
    </Layout>
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
