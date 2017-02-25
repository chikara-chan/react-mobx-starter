import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Common from 'common/containers/Common'
import App from './containers/Root'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Common>
    <AppContainer>
      <App store={store}/>
    </AppContainer>
  </Common>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const RootContainer = require('./containers/Root')

    render(
      <Common>
        <AppContainer>
          <RootContainer store={store}/>
        </AppContainer>
      </Common>,
      document.getElementById('root')
    )
  })
}
