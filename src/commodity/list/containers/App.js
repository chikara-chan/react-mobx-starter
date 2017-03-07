import React, {PureComponent} from 'react'
import BreadcrumbLayout from 'shared/components/BreadcrumbLayout'
import styles from '../sass/App'
import FormSection from '../components/FormSection.js'
import HandleSection from '../components/HandleSection.js'
import ItemListSection from '../components/ItemListSection.js'

class App extends PureComponent {
  render() {
    return (
      <BreadcrumbLayout titles={[{
        name: '商品管理',
        href: '#/'
      }]}>
        <div className={styles.app}>
          <FormSection></FormSection>
          <HandleSection></HandleSection>
          <ItemListSection></ItemListSection>
        </div>
      </BreadcrumbLayout>
    )
  }
}

export default App
