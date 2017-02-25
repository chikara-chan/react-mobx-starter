import React, {PureComponent} from 'react'
import styles from 'common/sass/Header'

class Header extends PureComponent {
  constructor() {
    super()
  }

  render() {
    return (
      <header className={styles.header} onClick={::this.handleClick}>
        <div className={styles.left}>
          <span className={styles.span}>Boilerplate</span>
        </div>
        <div className={styles.right}>
          <span className={styles.description}>Hello, world！</span>
        </div>
      </header>
    )
  }
}

export default Header
