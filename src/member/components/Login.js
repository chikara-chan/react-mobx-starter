import React, {PureComponent} from 'react'
import styles from '../sass/Login'
import {Button, Form, Input, Icon, Checkbox} from 'antd'
import ajax from 'shared/ajax'
import {getURLParams} from 'invincible'

class Login extends PureComponent {
  handleSubmit(e) {
    e.preventDefault()

    const {form} = this.props

    form.validateFields((err, values) => {
      if (!err) {
        ajax({
          url: '/api/login',
          data: values
        }).then(() => {
          const {redirect} = getURLParams()

          if (redirect) {
            location.replace(decodeURIComponent(redirect))
          } else {
            location.replace('/')
          }
        })
      }
    })
  }

  render() {
    const {form} = this.props

    return (
      <div className={styles.mainSection}>
        <h1 className={styles.title}>采好货LOGO</h1>
        <Form className={styles.form}
          onSubmit={this.handleSubmit}>
          <div className={styles.container}>
            <Form.Item className={styles.field}>
              {form.getFieldDecorator('userName', {
                rules: [{
                  required: true,
                  message: '手机号不能为空'
                }, {
                  pattern: /^\d{11}$/,
                  message: '请输入正确格式'
                }]
              })(<Input addonBefore={<Icon type="user"/>} maxLength="11" placeholder="手机号"/>)}
            </Form.Item>
            <Form.Item className={styles.field}>
              {form.getFieldDecorator('password', {
                rules: [{
                  required: true,
                  message: '密码不能为空'
                }]
              })(<Input type="password" addonBefore={<Icon type="lock"/>} placeholder="密码"/>)}
            </Form.Item>
            <Form.Item className={styles.field}>
              {form.getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: false
              })(
                <Checkbox>下次自动登录</Checkbox>
              )}
            </Form.Item>
            <Form.Item className={styles.field}>
              <Button className={styles.button} htmlType="submit">登录</Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    )
  }
}

export default Form.create()(Login)
