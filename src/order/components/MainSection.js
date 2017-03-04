import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import styles from '../sass/MainSection'
import Order from './Order'
import {Button} from 'antd'

@inject('orderStore')
@observer
class MainSection extends PureComponent {
  handleClick() {
    const {orderStore} = this.props

    orderStore.fetchOrders()
  }

  render() {
    const {orderStore} = this.props

    return (
      <div className={styles.mainSection}>
        <Button onClick={this.handleClick}>Fetch Orders</Button>
        {orderStore.orders.map(order =>
          <Order order={order} key={order.id}/>
        )}
      </div>
    )
  }
}

export default MainSection
