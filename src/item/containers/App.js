import React, {PureComponent} from 'react'
import styles from '../sass/App'
import ItemEdit from '../components/ItemEdit'
import Loading from '../components/Loading'

class App extends PureComponent {
  render() {
    return (
      <div className={styles.app}>
        <ItemEdit/>
        <Loading/>
      </div>
    )
  }
}

export default App
