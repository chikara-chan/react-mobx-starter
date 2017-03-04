import React, {PureComponent} from 'react'
import styles from '../sass/MainSection'
import Order from './Order'
import {Button} from 'antd'

@inject('orderStore')
@observer
class MainSection extends PureComponent {
  render() {
    const {orderStore} = this.props

    return (
      <div className={styles.mainSection}>
        <div className={styles.container}>
          <Button>Fetch Orders</Button>
          {orderStore.orders.map(order =>
            <Order order={order} key={order.id}/>
          )}
        </div>
      </div>
    )
  }
}

export default MainSection
