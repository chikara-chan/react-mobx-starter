import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import styles from '../sass/HandleSection'
import {Button, Form, Input, Select, DatePicker} from 'antd'


@observer
class HandleSection extends PureComponent {
  deleteHandle(e) {

  }


  render() {

    return (
      <div className={styles.handleSection}>
        <Button onClick="deleteHandle">删 除</Button>
        <Button onClick="deleteHandle">上 架</Button>
        <Button onClick="deleteHandle">下 架</Button>
        <Button onClick="deleteHandle">导出店铺全部商品</Button>
      </div>
    )
  }
}

export default HandleSection
