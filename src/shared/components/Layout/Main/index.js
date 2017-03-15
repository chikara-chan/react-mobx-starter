import React from 'react'
import styles from './index.scss'

function Main(props) {
  const { children } = props

  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}

export default Main
