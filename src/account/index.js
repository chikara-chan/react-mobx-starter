import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import Layout from '../layout/containers/Layout'
import My from './my/containers/App'
import Password from './password/containers/App'

render(
  <AppContainer>
    <Layout>
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRoute component={My}/>
          <Route path="password" component={Password}/>
        </Route>
      </Router>
    </Layout>
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
