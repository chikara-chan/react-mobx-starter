import React, {PureComponent} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actions from '../actions'
import styles from '../sass/App'
import MainSection from '../components/MainSection'
import Header from '../components/Header'

class App extends PureComponent {
  componentWillMount() {
    const {actions} = this.props

    actions.fetchShops()
  }
  render() {
    const {actions, shops} = this.props

    return (
      <div className={styles.app}>
        <Header actions={actions}/>
        <MainSection shops={shops} actions={actions}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
