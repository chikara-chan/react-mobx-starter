import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import styles from '../sass/FormSection'
import {Button, Form, Input, Select, DatePicker} from 'antd'
const FormItem = Form.Item;
const Option = Select.Option;

@inject('queryStore')
@observer
class FormSection extends PureComponent {
  handleSubmit(e) {
    e.preventDefault();

    const {form,queryStore} = this.props
    form.validateFields((err, values) => {
      if (!err) {
        queryStore.replaceQueryParams(values);
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
            {getFieldDecorator('itemStatus', {
            })(
              <Select size="default"
                  style={{ width: 120 }}
                  placeholder="请选择商品状态"
                >
                <Option value="0,10,20,30,40,100">全部</Option>
                <Option value="100">在售</Option>
                <Option value="0,10,20,30,40">已下架</Option>
              </Select>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('itemId', {
            })(
              <Input size="default" placeholder="请输入商品ID" />
            )}
          </FormItem>

          <FormItem>
            {getFieldDecorator('searchKey', {
            })(
              <Input size="default" placeholder="请输入商品名称" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('barcode', {
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
