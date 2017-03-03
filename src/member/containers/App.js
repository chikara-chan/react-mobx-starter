import React, {PureComponent} from 'react'
import 'antd/lib/style/css'
import 'layout/sass/global'
import styles from '../sass/App'
import Login from '../components/Login'

class App extends PureComponent {
  render() {
    return (
      <div className={styles.app}>
        <Login/>
      </div>
    )
  }
}

export default App
