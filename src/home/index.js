import React from 'react'
import {render} from 'react-dom'
import Common from 'common/containers/Common'
import App from 'home/containers/Root'
import configureStore from 'home/store/configureStore'

import { AppContainer } from 'react-hot-loader'

const store = configureStore()

render(
  <AppContainer>
    <Common>
      <App store={store}/>
    </Common>
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('home/containers/Root', () => {
    const RootContainer = require('home/containers/Root');
    render(
      <AppContainer>
  <Common>
    <RootContainer store={store}/>
  </Common>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
