import React, {PureComponent} from 'react'
import {findDOMNode} from 'react-dom'
import {observer, inject} from 'mobx-react'
import styles from '../sass/Order'
import SubOrder from './SubOrder'
import {Row, Col} from 'antd'
import {formatDate} from 'invincible'

const mapTabsKey = {
  0: '待发货',
  1: '已发货',
  2: '已取消'
}

@inject('orderStore', 'tabsStore')
@observer
class Order extends PureComponent {
  handleConfirm() {
    const {order, orderStore} = this.props

    orderStore.handleConfirm({
      bizOrder: order.bizOrder
    })
  }

  handlePrint() {
    const el = document.createElement('iframe'),
      css = document.getElementById('printCopy'),
      preTitle = document.title
    let pri

    el.style.visible = 'invisible'
    el.style.width = '1000px'
    document.body.appendChild(el)
    pri = el.contentWindow
    pri.document.body.innerHTML = findDOMNode(this).outerHTML
    pri.document.head.innerHTML = css.outerHTML
    setTimeout(() => {
      document.title = '采购单'
      pri.print()
      document.title = preTitle
      el.parentNode.removeChild(el)
    }, 200)
  }

  render() {
    const {order, tabsStore} = this.props

    return (
      <div className={styles.order}>
        <div className={styles.header}>
          <span className={styles.item}>订单编号: {order.bizOrderId}</span>
          <span className={styles.item}>下单时间: {formatDate(order.gmtCreate)}</span><br/>
          <span className={styles.item}>配送地址: {order.addressSnapshot}</span>
          <span className={styles.item}>联系人: {order.buyerNick}</span>
          <span className={styles.item}>联系电话: {order.mobile}</span>
          <span className={styles.status}>{mapTabsKey[tabsStore.key]}</span>
        </div>
        <div className={styles.table}>
          <Row>
            <Col className={styles.tableLeft} sm={20}>
              <Row className={styles.th} gutter={15}>
                <Col sm={3}>NO.</Col>
                <Col sm={4}>商品货号</Col>
                <Col sm={11}>商品详情</Col>
                <Col sm={3}>单价</Col>
                <Col sm={3}>数量</Col>
              </Row>
              {order.subOrders.map(subOrder => <SubOrder subOrder={subOrder}/>)}
            </Col>
            <Col sm={4}>
              <div className={`${styles.th} ${styles.thRight}`}>订单备注</div>
              <div className={styles.tr}>
                {order.comment}
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.footer}>
          <span className={styles.colReft}>
            共 <span className={styles.strong}>{order.buyAmount}</span> 件商品,
            合计 ￥<span className={styles.strong}>{order.totalPrice / 100}</span>
          </span>
          <span className={styles.colRight}>
            <a className={styles.btnPrimary} onClick={this.handleConfirm} href="javascript:void(0)">确认发货</a>
            <a className={styles.btn} href="javascript:void(0)">导出订单</a>
            <a className={styles.btn} href="javascript:void(0)" onClick={this.handlePrint}>打印订单</a>
          </span>
        </div>
      </div>
    )
  }
}

export default Order
