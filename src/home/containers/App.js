import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actions from '../actions'
import styles from '../sass/App'

class App extends PureComponent {
  constructor() {
    super()
  }

  render() {
    const {actions, orders} = this.props

    return (
      <div className={styles.app}>
        111111
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
