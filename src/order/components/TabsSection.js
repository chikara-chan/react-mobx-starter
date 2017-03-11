import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import styles from '../sass/TabsSection'
import Order from './Order'
import {Button, Menu, Badge} from 'antd'
import {mapOrderStatus} from 'shared/utils'

@inject('tabsStore', 'orderStore')
@observer
class TabsSection extends PureComponent {
  handleClick(e) {
    const {tabsStore, orderStore} = this.props

    tabsStore.replaceKey(e.key)
    orderStore.updatePagination({
      pageNum: 1,
      total: 0
    })
    orderStore.replaceOrders([])
    orderStore.fetchOrders()
  }

  render() {
    const {tabsStore, orderStore} = this.props

    return (
      <div className={styles.tabsSection}>
        <Menu className={styles.menu}
          onClick={this.handleClick}
          selectedKeys={[tabsStore.key]}
          mode="horizontal">
          <Menu.Item className={styles.item}
            key="2">
              {mapOrderStatus[2]}<Badge className={styles.badge} count={orderStore.total['2']}/>
          </Menu.Item>
          <Menu.Item className={styles.item}
            key="3">
              {mapOrderStatus[3]}<Badge className={styles.badge}/>
          </Menu.Item>
          <Menu.Item className={styles.item}
            key="5">
              {mapOrderStatus[5]}<Badge className={styles.badge}/>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default TabsSection
