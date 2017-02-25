import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actions from 'home/actions'
import styles from 'home/sass/App'

class App extends PureComponent {
  constructor() {
    super()
  }

  render() {
    const {actions, orders} = this.props

    return (
      <div className={styles.app}>
        11111
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
