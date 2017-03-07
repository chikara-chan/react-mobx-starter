import React, {PureComponent} from 'react'
import {hashHistory} from 'react-router'
import {Button, Form, Input, message} from 'antd'
import styles from '../sass/MainSection'
import ajax from 'shared/ajax'

class MainSection extends PureComponent {
  handleSubmit(e) {
    e.preventDefault()

    const {form} = this.props

    form.validateFields((err, values) => {
      if (!err) {
        delete values.repassword
        ajax({
          url: '/api/login',
          data: values
        }).then(() => {
          location.replace('/account.html')
        })
      }
    })
  }

  checkPassword = (rule, value, callback) => {
    const {form} = this.props

    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码不相同');
    } else {
      callback()
    }
  }

  handleCancel() {
    hashHistory.push('/')
  }

  render() {
    const {form} = this.props

    return (
      <div className={styles.mainSection}>
        <Form className={styles.form}
          onSubmit={this.handleSubmit}>
          <Form.Item className={styles.field}
            labelCol={{span: 10}}
            wrapperCol={{span: 14}}
            label="当前登录密码">
            {form.getFieldDecorator('oldPassword', {
              rules: [{
                required: true,
                message: '必填项'
              }]
            })(<Input type="password" placeholder="输入当前登录密码"/>)}
          </Form.Item>
          <Form.Item className={styles.field}
            labelCol={{span: 10}}
            wrapperCol={{span: 14}}
            label="新的登录密码">
            {form.getFieldDecorator('password', {
              rules: [{
                required: true,
                message: '必填项'
              }]
            })(<Input type="password" placeholder="输入新的登录密码"/>)}
          </Form.Item>
          <Form.Item className={styles.field}
            labelCol={{span: 10}}
            wrapperCol={{span: 14}}
            label="再次输入新的登录密码">
            {form.getFieldDecorator('repassword', {
              rules: [{
                required: true,
                message: '必填项'
              }, {
              validator: this.checkPassword,
              }]
            })(<Input type="password" placeholder="再次输入新的登录密码"/>)}
          </Form.Item>
          <Form.Item className={styles.field}
            wrapperCol={{span: 14, offset: 10}}>
            <Button className={styles.submit} htmlType="submit">确定</Button>
            <Button className={styles.button} onClick={this.handleCancel}>取消</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Form.create()(MainSection)
