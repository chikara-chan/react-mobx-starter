import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Router, Route, hashHistory} from 'react-router'
import App from './containers/App'
import Login from './components/Login'
import Signup from './components/Signup'

render(
  <AppContainer>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={Login}/>
        <Route path="signup" component={Signup}/>
      </Route>
    </Router>
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
