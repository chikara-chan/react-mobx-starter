import React, {PureComponent} from 'react'
import 'antd/lib/style/css'
import 'layout/sass/global'
import styles from '../sass/App'
import Login from '../components/Login'
import canvas from '../addon/canvas'
import '../sass/canvas'

class App extends PureComponent {
  componentDidMount() {
    const el = document.createElement('canvas')

    el.width = 0
    el.height = 0
    el.id = 'canvas'
    document.body.appendChild(el)
    canvas.init()
  }

  render() {
    return (
      <div className={styles.app}>
        <Login/>
      </div>
    )
  }
}

export default App
