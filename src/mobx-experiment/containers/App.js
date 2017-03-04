import React, {PureComponent} from 'react'
import styles from '../sass/App'
import MainSection from '../components/MainSection'

class App extends PureComponent {
  render() {
    const {orders} = this.props

    return (
      <div className={styles.app}>
        <MainSection orders={orders} actions={actions}/>
      </div>
    )
  }
}

export default App
