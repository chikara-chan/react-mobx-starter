import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import styles from '../sass/ItemListSection'
import {Table} from 'antd'

@inject('queryStore','itemListStore')
@observer
class HandleSection extends PureComponent {

  deleteHandle(e) {
    console.log(e)
  }

  editHandle(e) {
    console.log(e)
  }


render() {
    let itemList = this.props.itemListStore.itemList;
    let totalCount = this.props.itemListStore.totalCount;
    const queryStore = this.props.queryStore;

    let paginationConfig = {
      total:totalCount,
      pageSize:10,
      onChange(index){
        queryStore.replaceQueryParams({
          page:index
        });

      }
    }


    let columns = [{
        title: '商品ID',
        dataIndex: 'id',
        key: 'id',
      }, {
        title: '商品信息',
        key: 'itemInfo',
        render: (text, record) => {
          return (<div className={styles.itemInfo}>
            <div className={styles.imgContent}>
              <img src={'http://imgsize.52shangou.com/img/'+text.bigPicUrl+'@1e_100w_100h_1c_0i_1o_90Q_1x.jpg'} />
            </div>
            <div className={styles.txtContent}>
              <p className={styles.itemName}>{text.itemName}</p>
              <p className={styles.itemProperty}>{text.property}</p>
            </div>
          </div>)
        },
      },{
        title: '商品价格',
        key: 'price',
        render: (text, record) => {
          return (<span>￥{(text.price/100).toFixed(2)}</span>)
        },
      },{
        title: '月销量',
        key: 'soldQuantity',
        dataIndex:'soldQuantity'
      },{
        title: '当前库存',
        key: 'quantity',
        dataIndex:'quantity'
      },{
        title: '商品状态',
        key: 'itemStatus',
        render: (text, record) => {
          var isOnline = text.itemStatus === 100;
          var statusStr = isOnline ? (<span className={styles.online}>在售</span>) :
            (<span className={styles.offline}>未上架</span>)
          return (statusStr)
        }
      },{
        title: '操作',
        key: 'action',
        render: (text, record) => {
          return (<p>
            <a onClick={this.editHandle} className={styles.handle} href={'#/edit/'+text.id}>编辑</a>
            <a onClick={this.deleteHandle} className={styles.handle} href="javascript:void(0);">删除</a>
          </p>)
        }
      }];
      // let selectedRowKeys = []
      const rowSelection = {
        // selectedRowKeys,
        onChange(selectedRowKeys){
          console.log(selectedRowKeys)
          // selectedRowKeys = selectedRowKeys
        }
      }



    return (
      <div className={styles.itemListSection}>
        <Table rowKey="id" rowSelection={rowSelection}  dataSource={itemList} columns={columns} pagination={paginationConfig} />
      </div>
    )
  }
}

export default HandleSection
