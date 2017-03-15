import React from 'react'
import 'antd/lib/style/css'
import '../../reboot/global'
import styles from './index.scss'
import Header from './Header'
import Navbar from './Navbar'
import Main from './Main'

function Layout(props) {
  const { children } = props

  return (
    <div className={styles.layout}>
      <Header />
      <Navbar />
      <Main>
        {children}
      </Main>
    </div>
  )
}

export default Layout
