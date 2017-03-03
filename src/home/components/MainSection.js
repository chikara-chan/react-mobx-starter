import React, {PureComponent} from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import styles from '../sass/MainSection'
import Shop from './Shop'
import {Row, Col} from 'antd'

class MainSection extends PureComponent {
  state = {
    shops: []
  }

  loadShops() {
    let {shops} = this.state

    for (let i = 0; i < 3; i++) {
      shops = shops.concat({
        id: Date.now(),
        name: `订单${i}`
      })
    }
    this.setState({
      shops
    })
  }

  render() {
    // Const {shops} = this.props
    const {shops} = this.state

    return (
      <div className={styles.mainSection}>
        <div className={styles.container}>
          <InfiniteScroll className={styles.scroll}
                loadMore={this.loadShops.bind(this)}
                hasMore={true}
                threshold={1}
                loader={(
                  <a className={styles.loader} href="javascript:void(0)">点击加载更多店铺</a>
                )}>
            <Row gutter={20}>
                  {shops.map(shop =>
                    <Col sm={12} md={8} key={shop.id}>
                      <Shop shop={shop}/>
                    </Col>
                  )}
            </Row>
          </InfiniteScroll>
        </div>
      </div>
    )
  }
}

export default MainSection
