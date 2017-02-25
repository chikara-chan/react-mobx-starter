import React, {PureComponent} from 'react'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import DevTools from './DevTools'
import Common from './Common'

class Root extends PureComponent {
  render() {
    const {store, children} = this.props

    return (
      <AppContainer>
        <Provider store={store}>
          <div>
            <Common>{children}</Common>
            <DevTools/>
          </div>
        </Provider>
      </AppContainer>
    )
  }
}

if (module.hot) {
  module.hot.accept('./Common',() => {
    require('./Common')
  })
}

export default Root
