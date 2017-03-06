import React, {PureComponent} from 'react'
import styles from '../sass/App'
import TabsSection from '../components/TabsSection'
import FormSection from '../components/FormSection'
import MainSection from '../components/MainSection'
import FooterSection from '../components/FooterSection'

class App extends PureComponent {
  render() {
    return (
      <div className={styles.app}>
        <TabsSection/>
        <FormSection/>
        <MainSection/>
        <FooterSection/>
      </div>
    )
  }
}

export default App
