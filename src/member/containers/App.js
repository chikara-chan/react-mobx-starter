import React, {PureComponent} from 'react'
import 'antd/lib/style/css'
import 'layout/sass/global'
import styles from '../sass/App'

class App extends PureComponent {
  render() {
    const {children} = this.props

    return (
      <div className={styles.app}>
        {children}
      </div>
    )
  }
}

export default App
