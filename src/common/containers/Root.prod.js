import React, {PureComponent} from 'react'
import {Provider} from 'react-redux'
import Common from './Common'

class Root extends PureComponent {
  render() {
    const {store} = this.props

    return (
      <Provider store={store}>
        <Common>{children}</Common>
      </Provider>
    )
  }
}

export default Root
