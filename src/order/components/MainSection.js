import React, { PureComponent } from 'react'
import { observer, inject } from 'mobx-react'
import styles from '../sass/MainSection'
import Order from './Order'

@inject('orderStore')
@observer
class MainSection extends PureComponent {
  render() {
    const { orderStore } = this.props

    return (
      <div className={styles.mainSection}>
        {orderStore.orders.map(order =>
          <Order order={order} key ={order.id} />
        )}
      </div>
    )
  }
}

export default MainSection
