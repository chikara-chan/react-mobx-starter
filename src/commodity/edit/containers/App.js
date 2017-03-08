import React, {PureComponent} from 'react'
import BreadcrumbLayout from 'shared/components/BreadcrumbLayout'
import styles from '../sass/App'
import ItemEdit from '../components/ItemEdit'

class App extends PureComponent {
  render() {
    var itemId = this.props.params.id;
    return (
      <BreadcrumbLayout titles={[{
        name: '商品管理',
        href: '#/'
      },{
        name: '商品编辑',
        href: '#/edit'
      }]}>
        <div className={styles.app}>
          <ItemEdit id={itemId}></ItemEdit>
        </div>
      </BreadcrumbLayout>
    )
  }
}

export default App
