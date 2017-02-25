import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import 'common/sass/global'
import styles from 'common/sass/Common'
import Header from 'common/components/Header'
import Navbar from 'common/components/Navbar'
import Main from 'common/components/Main'

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
