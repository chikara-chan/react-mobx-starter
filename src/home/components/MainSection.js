import React, {PureComponent} from 'react'
import styles from '../sass/MainSection'
import Order from './Order'

class MainSection extends PureComponent {
  constructor() {
    super()
  }

  render() {
    const {orders} = this.props

    return (
      <main className={styles.mainSection}>
        {orders.map(order =>
          <Order order={order} key={order.id}/>
        )}
      </main>
    )
  }
}

export default MainSection
