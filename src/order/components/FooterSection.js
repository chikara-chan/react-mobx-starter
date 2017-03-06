import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import styles from '../sass/FooterSection'
import {Pagination} from 'antd'

@inject('orderStore')
@observer
class FooterSection extends PureComponent {
  handleChange(pageNum) {
    const {orderStore} = this.props

    orderStore.replacePageNum(pageNum)
  }

  render() {
    const {orderStore} = this.props

    return (
      <div className={styles.footerSection}>
        <Pagination className={styles.pagination}
          current={orderStore.pageNum}
          onChange={this.handleChange}
          total={orderStore.pageTotal}/>
      </div>
    )
  }
}

export default FooterSection
