import React, {PureComponent} from 'react'
import styles from '../sass/MainSection'
import Order from './Order'
import {Button} from 'antd'

class MainSection extends PureComponent {
  handleClick() {
    const {actions} = this.props

    actions.fetchOrders()
  }

  render() {
    const {orders} = this.props

    return (
      <div className={styles.mainSection}>
        <div className={styles.container}>
          <Button onClick={this.handleClick}>Fetch Orders</Button>
          {orders.map(order =>
            <Order order={order} key={order.id}/>
          )}
        </div>
      </div>
    )
  }
}

export default MainSection
