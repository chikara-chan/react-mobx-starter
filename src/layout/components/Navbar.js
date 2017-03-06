import React from 'react'
import styles from '../sass/Navbar'
import {Menu, Icon} from 'antd'

function isActive(path) {
  return location.pathname.endsWith(path)
}

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>LOGO</div>
      <Menu className={styles.menu}
        theme ="dark">
        <Menu.Item className={`${styles.item} ${isActive('/') ? styles.active : ''}`}
          key="0">
          <a href="/">
            <Icon type="file-text"/>订单管理
          </a>
          <Icon className={styles.iconRight} type="right"/>
        </Menu.Item>
        <Menu.Item className={`${styles.item} ${isActive('/commondity.html') ? styles.active : ''}`}
          key="1">
          <a href="/commodity.html">
            <Icon type="appstore-o"/>商品管理
          </a>
          <Icon className={styles.iconRight} type="right"/>
        </Menu.Item>
        <Menu.Item className={`${styles.item} ${isActive('/account.html') ? styles.active : ''}`}
          key="2">
          <a href="/account.html">
            <Icon type="user"/>个人中心
          </a>
          <Icon className={styles.iconRight} type="right"/>
        </Menu.Item>
      </Menu>
    </nav>
  )
}

export default Navbar
