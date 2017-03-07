import React, {PureComponent} from 'react'
import BreadcrumbLayout from 'shared/components/BreadcrumbLayout'
import styles from '../sass/App'
import MainSection from '../components/MainSection'

class App extends PureComponent {
  render() {
    return (
      <BreadcrumbLayout titles={[{
        name: '个人中心',
        href: '#/'
      }]}>
        <div className={styles.app}>
          <MainSection/>
        </div>
      </BreadcrumbLayout>
    )
  }
}

export default App
