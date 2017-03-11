import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import styles from '../sass/FooterSection'
import {Pagination} from 'antd'

@inject('orderStore', 'tabsStore')
@observer
class FooterSection extends PureComponent {
  handleChange(pageNum) {
    const {orderStore} = this.props

    orderStore.updatePagination({pageNum})
    orderStore.fetchOrders()
  }

  render() {
    const {orderStore, tabsStore} = this.props

    if (orderStore.orders.length === 0) {
      return null
    }

    return (
      <div className={styles.footerSection}>
        <Pagination className={styles.pagination}
          current={orderStore.pagination.pageNum}
          onChange={this.handleChange}
          total={orderStore.total[tabsStore.key]}/>
      </div>
    )
  }
}

export default FooterSection
