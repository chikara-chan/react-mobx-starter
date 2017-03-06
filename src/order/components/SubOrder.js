import React, {PureComponent} from 'react'
import styles from '../sass/SubOrder'
import {Row, Col} from 'antd'

class SubOrder extends PureComponent {
  render() {
    const {subOrder} = this.props

    return (
      <div className={styles.subOrder}>
        <Row className={styles.row} gutter={15}>
          <Col className={styles.col} sm={3}>{subOrder.itemId}</Col>
          <Col sm={4}>{46900001974984629}</Col>
          <Col sm={11}>
            <div className={styles.colLeft}>
              <img className={styles.img} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488795642577&di=aa89e9b347cc9891075c21e566855904&imgtype=0&src=http%3A%2F%2Fdownza.img.zz314.com%2Fedu%2Fpc%2Fwlgj-1008%2F2017-02-25%2Fab6bb2a433d49da21db18bdc49b96810.gif"/>
            </div>
            <div className={styles.colRight}>
              <p className={styles.desc}>{'品牌名称'}{'商品名称名称如果超级无敌长的话就自动断行自动最多两行还是超出的话就自动省略啦啦啦啦'}</p>
              <p className={styles.prop}>{'500g'} / {'斤'}</p>
            </div>
          </Col>
          <Col sm={3}>￥{90.10}</Col>
          <Col sm={3}>&times; {10}</Col>
        </Row>
      </div>
    )
  }
}

export default SubOrder
