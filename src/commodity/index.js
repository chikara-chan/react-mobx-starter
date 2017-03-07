import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'mobx-react'
import {AppContainer} from 'react-hot-loader'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import BreadcrumbLayout from 'shared/components/BreadcrumbLayout'
import Layout from '../layout/containers/Layout'
import stores from './stores'
import Edit from './edit/containers/App'
import List from './list/containers/App'

render(
  <AppContainer>
    <Provider {...stores}>
      <Layout>
        <Router history={hashHistory}>
          <Route path="/">
            <IndexRoute component={List}/>
            <Route path="edit" component={Edit}/>
          </Route>
        </Router>
      </Layout>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
