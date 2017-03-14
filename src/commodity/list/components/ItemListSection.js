import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import styles from '../sass/ItemListSection'
import {Table,Popconfirm} from 'antd'

@inject('queryStore','itemListStore','handleStore')
@observer
class HandleSection extends PureComponent {

  deleteHandle(e,id) {
    const handleStore = this.props.handleStore;
    handleStore.deleteItem(id);

  }



render() {
    let itemList = this.props.itemListStore.itemList;
    let totalCount = this.props.itemListStore.totalCount;
    const queryStore = this.props.queryStore;
    const handleStore = this.props.handleStore;

    let paginationConfig = {
      total:totalCount,
      pageSize:20,
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
        width:'50%',
        render: (text) => {
          return (<div className={styles.itemInfo}>
            <div className={styles.imgContent}>
              <img src={'http://imgsize.52shangou.com/img/'+text.bigPicUrl+'@1e_100w_100h_1c_0i_1o_90Q_1x.jpg'} />
            </div>
            <div className={styles.txtContent}>
              <p className={styles.itemName}>
              <strong>{text.brand}</strong> {text.itemName}</p>
              <p className={styles.itemProperty}>{text.property} / {text.unit}</p>
            </div>
          </div>)
        },
      },{
        title: '当前库存',
        key: 'quantity',
        dataIndex:'quantity'
      },{
        title: '月销量',
        key: 'soldQuantity',
        dataIndex:'soldQuantity'
      },{
        title: '商品状态',
        key: 'itemStatus',
        render: (text) => {
          var isOnline = text.itemStatus === 100;
          var statusStr = isOnline ? (<span className={styles.online}>在售</span>) :
            (<span className={styles.offline}>未上架</span>)
          return (statusStr)
        }
      },{
        title: '操作',
        key: 'action',
        render: (text) => {
          return (<p>
            <a className={styles.handle} href={'#/edit/'+text.id}>编辑</a>
            <Popconfirm placement="left" title="确认删除吗？" onConfirm={this.deleteHandle(text.id)} okText="确认" cancelText="取消">
              <a className={styles.handle} href="javascript:void(0);">删除</a>
            </Popconfirm>
          </p>)
        }
      }];

      const rowSelection = {
        onChange(selectedRowKeys){

          var ids = itemList.map(function(v){
            return v.id;
          });
          handleStore.replaceSelectedList(selectedRowKeys.filter(function(v){
            return ids.indexOf(v) > -1;
          }));
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
