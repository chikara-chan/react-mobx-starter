import React, { PureComponent } from 'react'
import styles from '../sass/App'
import MainSection from '../components/MainSection'

class App extends PureComponent {
  render() {
    return (
      <div className={styles.app}>
        <MainSection />
      </div>
    )
  }
}

export default App
