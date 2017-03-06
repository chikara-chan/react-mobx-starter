import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import styles from '../sass/FormSection'
import Order from './Order'
import {Button, Form, Input, Select, Option, DatePicker} from 'antd'

@inject('tabsStore')
@inject('orderStore')
@observer
class FormSection extends PureComponent {
  handleSubmit(e) {
    e.preventDefault()

    const {form, tabsStore, orderStore} = this.props

    form.validateFields((err, values) => {
      if (!err) {
        if (values.rangeTime) {
          values.start = values.rangeTime[0]._d.getTime()
          values.end = values.rangeTime[0]._d.getTime()
        }
        delete values.rangeTime
        console.log(values)
        orderStore.fetchOrders({
          key: tabsStore.key,
          ...values
        })
      }
    })
  }

  render() {
    const {form} = this.props

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
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder={['开始时间', '结束时间']}/>
            )}
          </Form.Item>
          <Form.Item className={styles.item}>
            <Button className={styles.button} htmlType="submit">查询</Button>
          </Form.Item>
        </Form>
        <a className={styles.btn} href="javascript:void(0)">导出全部待发货订单</a>
        <a className={styles.btn} href="javascript:void(0)">打印全部待发货订单</a>
      </div>
    )
  }
}

export default Form.create()(FormSection)
