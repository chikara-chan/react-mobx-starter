import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import styles from '../sass/FormSection'
import Order from './Order'
import {Button, Form, Input, Select, Option, DatePicker, message} from 'antd'

@inject('orderStore', 'formStore')
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

  render() {
    const {form, orderStore} = this.props

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
            <a className={styles.btn} href="javascript:void(0)">导出全部待发货订单</a>
          </div>
        }
      </div>
    )
  }
}

export default Form.create()(FormSection)
