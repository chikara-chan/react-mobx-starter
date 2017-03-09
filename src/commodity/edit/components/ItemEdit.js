import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import styles from '../sass/ItemEdit'
import {Form, Tooltip, Icon,Row, Col,Button,Input,Upload,message} from 'antd';
import api from 'shared/api';



const FormItem = Form.Item;



@inject('itemStore','loadingStore')
@observer
class ItemEdit extends PureComponent {

  handleSubmit(e) {
    e.preventDefault();
    const {form} = this.props;
    const itemStore = this.props.itemStore;
    form.validateFields((err, values) => {
      if (!err) {
        // do sth
        itemStore.replaceItem(values);
        itemStore.saveItem();
      }
    })
  }

  componentWillMount(){
    const loadingStore = this.props.loadingStore;
    const itemStore = this.props.itemStore;
    const itemId = this.props.id;
    loadingStore.switchLoading(true);
    itemStore.fetchItem(itemId,function(){
      loadingStore.switchLoading(false);
    });
  }

  goBack(){
    history.go(-1);
  }


  render() {




    const {getFieldDecorator} = this.props.form;
    const itemStore = this.props.itemStore;


    // 代理一下方可调试
    const uploadProps = {
      name: 'Filename',
      action: api.uploadImage,
      showUploadList:false,
      onChange(info) {
        if(info.file.response){
          if(info.file.response.entry){
            itemStore.replaceItem({
              ...itemStore.itemInfo,...{
                bigPicUrl:info.file.response.entry
              }
            })
          }else{
            message.error(info.file.response.message)
          }
        }
      }
    };

    return (
      <div className={styles.mainSection}>
        <div className={styles.container}>
        <Form onSubmit={this.handleSubmit}>
          <div className={styles.itemForm}>
            <ul>
              <li>
                <Row>
                  <Col span={10} className={styles.label}>
                    <label>商品图片：</label>
                  </Col>
                  <Col span={14}>
                    <Upload {...uploadProps}>
                      <img src={itemStore.itemInfo.bigPicUrl ?
                          'http://imgsize.52shangou.com/img/'+itemStore.itemInfo.bigPicUrl+'@1e_100w_100h_1c_0i_1o_90Q_1x.jpg' :
                          'http://imgsize.52shangou.com/img/n/03/06/1488779953523_1743.png'} />
                      <a onClick={this.updateImageHandle}>更换图片</a>
                    </Upload>


                    <FormItem className={styles.noBottomSpace}>
                    {getFieldDecorator('bigPicUrl', {
                      initialValue:itemStore.itemInfo.bigPicUrl
                    })(
                      <Input type="hidden" />
                    )}
                    </FormItem>
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col span={10} className={styles.label}>
                    <label>商品品牌：</label>
                  </Col>
                  <Col span={14}>
                    <FormItem className={styles.noBottomSpace}>
                    {getFieldDecorator('brand', {
                      initialValue:itemStore.itemInfo.brand,
                      rules: [{ required: true, message: '请输入品牌' }],
                    })(
                      <Input  placeholder="商品品牌" />
                    )}
                    </FormItem>
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col span={10} className={styles.label}>
                    <label>商品名称：</label>
                  </Col>
                  <Col span={14}>
                    <FormItem className={styles.noBottomSpace}>
                    {getFieldDecorator('itemName', {
                      initialValue:itemStore.itemInfo.itemName,
                      rules: [{ required: true, message: '请输入商品名称' }],
                    })(
                      <Input  placeholder="商品名称" />
                    )}
                    </FormItem>
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col span={10} className={styles.label}>
                    <label>商品规格/单位：</label>
                  </Col>
                  <Col span={14}>
                    {itemStore.itemInfo.property}
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col span={10} className={styles.label}>
                    <label>所属类目：</label>
                  </Col>
                  <Col span={14}>
                    {itemStore.itemInfo.catName}
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col span={10} className={styles.label}>
                    <label>商品条形码：</label>
                  </Col>
                  <Col span={14}>
                    {itemStore.itemInfo.barcode}
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col span={10} className={styles.label}>
                    <label>商品ID：</label>
                  </Col>
                  <Col span={14}>
                    {itemStore.itemInfo.id}
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col span={10} className={styles.label}>
                    <label>商品总库存：</label>
                  </Col>
                  <Col span={14}>
                    <FormItem className={styles.noBottomSpace}>
                      {getFieldDecorator('quantity', {
                        initialValue:itemStore.itemInfo.quantity,
                        rules: [{ required: true, message: '请输入商品总库存' }],
                      })(
                        <Input  placeholder="商品总库存" />
                      )}
                    </FormItem>
                  </Col>
                </Row>
              </li>
              <li>
                <Row>
                  <Col span={10} className={styles.label}>
                    <label>最小起订量：</label>
                  </Col>
                  <Col span={14}>
                    <FormItem className={styles.noBottomSpace}>
                    {getFieldDecorator('orderLimit', {
                      initialValue:itemStore.itemInfo.orderLimit || 1,
                      rules: [{ required: true, message: '请输入最小起订量' }],
                    })(
                      <Input  placeholder="最小起订量" />
                    )}
                    </FormItem>
                  </Col>
                </Row>
              </li>

              <li>
                <Row>
                  <Col span={10} className={styles.label}>
                  </Col>
                  <Col span={14}>
                    <Button type="primary" htmlType="submit">保 存</Button>
                    <Button onClick={this.goBack}>返 回</Button>
                  </Col>
                </Row>
              </li>
            </ul>
          </div>
        </Form>
        </div>
      </div>
    )
  }
}

export default Form.create()(ItemEdit)
