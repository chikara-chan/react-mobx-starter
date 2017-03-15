import React from 'react'
import styles from './index.scss'
import { Menu, Icon } from 'antd'

function isActive(path) {
  return location.pathname.endsWith(path)
}

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>LOGO</div>
      <Menu className={styles.menu}
        theme="dark">
        <Menu.Item className={`${styles.item} ${isActive('/') ? styles.active : ''}`}
          key="0">
          <a href="./index.html">
            <Icon type="file-text" />munu1
          </a>
          <Icon className={styles.iconRight} type="right" />
        </Menu.Item>
        <Menu.Item className={`${styles.item} ${isActive('/menu2.html') ? styles.active : ''}`}
          key="1">
          <a href="./menu2.html">
            <Icon type="appstore-o" />menu2
          </a>
          <Icon className={styles.iconRight} type="right" />
        </Menu.Item>
        <Menu.Item className={`${styles.item} ${isActive('/menu3.html') ? styles.active : ''}`}
          key="2">
          <a href="./menu3.html">
            <Icon type="user" />menu3
          </a>
          <Icon className={styles.iconRight} type="right" />
        </Menu.Item>
      </Menu>
    </nav>
  )
}

export default Navbar
