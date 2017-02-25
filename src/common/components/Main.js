import React, {PureComponent} from 'react'
import styles from '../sass/Main'

class Main extends PureComponent {
  constructor() {
    super()
  }

  render() {
    const {orders, children} = this.props

    return (
      <main className={styles.main}>
        {children}
      </main>
    )
  }
}

export default Main
