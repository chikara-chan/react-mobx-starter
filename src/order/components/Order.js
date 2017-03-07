import React, {PureComponent} from 'react'
import {findDOMNode} from 'react-dom'
import {observer, inject} from 'mobx-react'
import styles from '../sass/Order'
import SubOrder from './SubOrder'
import {Row, Col} from 'antd'

@inject('orderStore')
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
    const {order} = this.props

    return (
      <div className={styles.order}>
        <div className={styles.header}>
          <span className={styles.item}>订单编号: {order.bizOrderId}</span>
          <span className={styles.item}>下单时间: {order.orderCreate}</span><br/>
          <span className={styles.item}>配送地址: {'蒋村商务中心'}</span>
          <span className={styles.item}>联系人: {'陈先生'}</span>
          <span className={styles.item}>联系电话: {'13336971320'}</span>
          <span className={styles.status}>{'待发货'}</span>
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
              {order.bizOrder.subOrders.map(subOrder => <SubOrder subOrder={subOrder}/>)}
            </Col>
            <Col sm={4}>
              <div className={`${styles.th} ${styles.thRight}`}>订单备注</div>
              <div className={styles.tr}>
                {'老板，麻烦开发票。发票抬头：杭州抢趣网络科技有限公司。谢谢 ~'}
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.footer}>
          <span className={styles.colReft}>
            共 <span className={styles.strong}>{'99'}</span> 件商品,
            合计 ￥<span className={styles.strong}>{'100万'}</span>
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
