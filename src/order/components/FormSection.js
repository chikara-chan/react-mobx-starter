import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import styles from '../sass/FormSection'
import Order from './Order'
import {Button, Form, Input, Select, Option, DatePicker, message} from 'antd'
import {mapOrderStatus} from 'shared/utils'

@inject('orderStore', 'formStore', 'tabsStore')
@observer
class FormSection extends PureComponent {
  handleSubmit(e) {
    e.preventDefault()

    const {form, orderStore, formStore} = this.props

    form.validateFields((err, data) => {
      if (!err) {
        if (data.rangeTime && data.rangeTime.length !== 0) {
          data.gmtCreateStart = data.rangeTime[0]._d.getTime()
          data.gmtCreateEnd = data.rangeTime[0]._d.getTime()
        }
        delete data.rangeTime
        formStore.replaceData(data)
        orderStore.updatePagination({
          pageNum: 1
        })
        orderStore.replaceOrders([])
        orderStore.fetchOrders()
      }
    })
  }

  handleExport() {
    const {orderStore, tabsStore} = this.props

    orderStore.handleExport({
      sellerListStatus: tabsStore.key,
      shopId: localStorage.getItem('shopId')
    })
  }

  componentWillMount() {
    const {orderStore} = this.props

    orderStore.fetchOrders()
  }

  render() {
    const {form, orderStore, tabsStore} = this.props

    return (
      <div className={styles.formSection}>
        <Form onSubmit={this.handleSubmit}
          className={styles.form}
          inline>
          <Form.Item className={styles.item}>
            {form.getFieldDecorator('bizOrderId', {rules: [{
              pattern: /^\d*$/,
              message: '请输入正确格式'
            }]})(<Input className={styles.input} placeholder="输入订单编号"/>)}
          </Form.Item>
          <Form.Item className={styles.item}>
            {form.getFieldDecorator('rangeTime')(
              <DatePicker.RangePicker
              use12Hours
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder={['开始时间', '结束时间']}/>
            )}
          </Form.Item>
          <Form.Item className={styles.item}>
            <Button className={styles.button} htmlType="submit">查询</Button>
          </Form.Item>
        </Form>
        {orderStore.orders.length !== 0 &&
          <div>
            <a className={styles.btn} href="javascript:void(0)" onClick={this.handleExport}>导出全部{mapOrderStatus[tabsStore.key]}订单</a>
          </div>
        }
      </div>
    )
  }
}

export default Form.create()(FormSection)
