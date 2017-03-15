import React, {PureComponent} from 'react'
import styles from '../sass/Order'
import {Row, Col} from 'antd'

class Order extends PureComponent {
  render() {
    const {order} = this.props

    return (
      <div className={styles.order}>
        {order.name}
      </div>
    )
  }
}

export default Order
