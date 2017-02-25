import React, {PureComponent} from 'react'
import styles from '../sass/Header'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <span className={styles.span}>Boilerplate</span>
      </div>
      <div className={styles.right}>
        <span className={styles.description}>Hello, world！</span>
      </div>
    </header>
  )
}

export default Header
