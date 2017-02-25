import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import '../sass/global'
import styles from '../sass/Common'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

class Common extends PureComponent {
  constructor() {
    super()
  }

  render() {
    const {actions, orders, children} = this.props

    return (
      <div className={styles.app}>
        <Header actions={actions}/>
        <Navbar actions={actions}/>
        <Main actions={actions} orders={orders}>
          {children}
        </Main>
      </div>
    )
  }
}

export default Common
