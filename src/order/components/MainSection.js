import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import styles from '../sass/MainSection'
import Order from './Order'
import {Button} from 'antd'
import icon from '../assets/icon.png'
import {mapOrderStatus} from 'shared/utils'

@inject('orderStore', 'tabsStore')
@observer
class MainSection extends PureComponent {
  handleClick() {
    const {orderStore} = this.props

    orderStore.fetchOrders()
  }

  render() {
    const {orderStore, tabsStore} = this.props

    return (
      <div className={styles.mainSection}>
        {orderStore.loading === true ? '' :
          orderStore.orders.length === 0 ?
          <div className={styles.mask}>
            <img src={icon}/>
            <p className={styles.desc}>没有{mapOrderStatus[tabsStore.key]}的订单</p>
          </div> :
          orderStore.orders.map(order =>
          <Order order={order}/>
        )}
      </div>
    )
  }
}

export default MainSection
