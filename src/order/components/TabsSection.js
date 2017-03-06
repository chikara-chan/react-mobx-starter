import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import styles from '../sass/TabsSection'
import Order from './Order'
import {Button, Menu, Badge} from 'antd'

@inject('tabsStore')
@inject('orderStore')
@observer
class TabsSection extends PureComponent {
  handleClick(e) {
    const {tabsStore} = this.props

    tabsStore.replaceKey(e.key)
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
            key="0">
              待发货<Badge className={styles.badge} count={orderStore.count}/>
          </Menu.Item>
          <Menu.Item className={styles.item}
            key="1">
              已发货<Badge className={styles.badge} count={orderStore.count}/>
          </Menu.Item>
          <Menu.Item className={styles.item}
            key="2">
              已取消<Badge className={styles.badge} count={orderStore.count}/>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default TabsSection
