import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import styles from '../sass/FormSection'
import {Button, Form, Input, Select, DatePicker} from 'antd'
const FormItem = Form.Item;
const Option = Select.Option;

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
    const getFieldDecorator = form.getFieldDecorator;

    return (
      <div className={styles.formSection}>
        <Form onSubmit={this.handleSubmit}
          className={styles.form}
          inline>
          <FormItem className={styles.item}>
            <Select size="default"
                style={{ width: 120 }}
                placeholder="请选择商品状态"
              >
              <Option value="jack">未上架</Option>
              <Option value="lucy">在售</Option>
            </Select>
          </FormItem>
          <FormItem>
            {getFieldDecorator('itemId', {
            })(
              <Input size="default" placeholder="请输入商品ID" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('name', {
            })(
              <Input size="default" placeholder="请输入商品名称" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('code', {
            })(
              <Input size="default" placeholder="请输入商品条形码" />
            )}
          </FormItem>

          <FormItem>
            <Button size="default" type="primary" htmlType="submit">查询</Button>
          </FormItem>

        </Form>

      </div>
    )
  }
}

export default Form.create()(FormSection)
