import React, {PureComponent} from 'react'
import {Provider} from 'react-redux'
import App from './Common'

class Root extends PureComponent {
  render() {
    const {store} = this.props

    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}

export default Root
