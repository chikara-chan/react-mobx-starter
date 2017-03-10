import React, {PureComponent} from 'react'
import styles from '../sass/SubOrder'
import {Row, Col} from 'antd'
import {wrapPicURL} from 'shared/utils'

class SubOrder extends PureComponent {
  render() {
    const {subOrder} = this.props

    return (
      <div className={styles.subOrder}>
        <Row className={styles.row} gutter={15}>
          <Col className={styles.col} sm={3}>{subOrder.itemId}</Col>
          <Col sm={4}>{subOrder.itemOuterId}</Col>
          <Col sm={11}>
            <div className={styles.colLeft}>
              <img className={styles.img} src={wrapPicURL(subOrder.itemPicUrl)}/>
            </div>
            <div className={styles.colRight}>
              <p className={styles.desc}>{'品牌名称'} {subOrder.itemName}</p>
              <p className={styles.prop}>{subOrder.property} / {subOrder.unit}</p>
            </div>
          </Col>
          <Col sm={3}>￥{subOrder.itemPrice / 100}</Col>
          <Col sm={3}>&times; {subOrder.buyAmount}</Col>
        </Row>
      </div>
    )
  }
}

export default SubOrder
