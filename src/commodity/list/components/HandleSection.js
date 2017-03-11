import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import styles from '../sass/HandleSection'
import {Button, Form, Input, Select, DatePicker,Popconfirm,message} from 'antd'

@inject('handleStore')
@observer
class HandleSection extends PureComponent {


  doHandle(e,type){
    let handleStore = this.props.handleStore;
    let selectedList = this.props.handleStore.selectedList;
    if(type != 'export' && !selectedList.length ){
      message.warn('没有选中的商品');
      return;
    }
    handleStore[type + 'Item']();
  }


  render() {

    return (
      <div className={styles.handleSection}>
        <Popconfirm placement="right" title="确认删除选中商品吗？" onConfirm={this.doHandle('delete')} okText="确认" cancelText="取消">
            <Button>删 除</Button>
        </Popconfirm>
        <Button onClick={this.doHandle('online')}>上 架</Button>
        <Button onClick={this.doHandle('offline')}>下 架</Button>
        <Button onClick={this.doHandle('export')}>导出店铺全部商品</Button>
      </div>
    )
  }
}

export default HandleSection
