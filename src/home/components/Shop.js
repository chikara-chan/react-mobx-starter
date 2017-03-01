import React, {PureComponent} from 'react'
import styles from '../sass/Shop'
import {Card, Row, Col} from 'antd'

class Shop extends PureComponent {
  render() {
    const {shop} = this.props

    return (
      <div className={styles.shop}>
        <Card className={styles.card} bodyStyle={{ padding: 0 }}>
          <Row>
            <Col className={styles.colLeft} span={8}>
              <img className={styles.img} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488355871917&di=35cd57264854974aed804faf63d21d42&imgtype=0&src=http%3A%2F%2Fimg2.a0bi.com%2Fupload%2Fttq%2F20160125%2F1453690806219_middle.png"/>
            </Col>
            <Col className={styles.colRight} span={16}>
              <h1 className={styles.title}>名字超级无敌长的话可是要自动省略哟</h1>
              <div className={styles.content}>
                <span>
                  起送价 <span className={styles.strong}>￥1000</span> | 配送费 <span className={styles.strong}>￥0</span>
                </span>
              </div>
              <div className={styles.content}>
                <span>主营: 水果、蔬菜</span>
                <span className={styles.pullRight}>上海|次日达</span>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

export default Shop
