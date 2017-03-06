import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router'
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
        <Link to="/phone">修改手机</Link><br/>
        <Link to="/password">修改密码</Link><br/>
        <Button onClick={this.handleClick}>Fetch Orders</Button>
        {orderStore.orders.map(order =>
          <Order order={order} key={order.id}/>
        )}
      </div>
    )
  }
}

export default MainSection
