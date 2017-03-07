import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import FormSection from './FormSection';
import styles from '../sass/ItemList';



@inject('loadingStore')
@inject('breadcrumbStore')
@observer
class ItemList extends PureComponent{


  componentWillMount(){

    const breadcrumbStore = this.props.breadcrumbStore;
    breadcrumbStore.replaceConfig([{
        name: '商品管理',
        href: '/'
      }])
  }

  render() {

    return (
      <div className={styles.itemListPage}>
        <FormSection />
      </div>
    );
  }
}

export default ItemList
