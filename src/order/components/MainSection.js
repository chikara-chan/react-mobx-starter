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
        {orderStore.orders.map(order =>
          <Order order={order}/>
        )}
      </div>
    )
  }
}

export default MainSection
