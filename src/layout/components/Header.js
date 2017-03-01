import React from 'react'
import styles from '../sass/Header'
import {Col, Row, Dropdown, Menu, Icon} from 'antd'

function isActive(path) {
  return location.pathname.endsWith(path)
}

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Row>
          <Col className={styles.colLeft} sm={12}>
            <a className={styles.link} href="/">LOGO</a>
            <a className={`${styles.link} ${isActive('') ? styles.active : ''}`} href="/">
              首页
            </a>
            <a className={`${styles.link} ${isActive('orders') ? styles.active : ''}`} href="/orders">
              我的订单
            </a>
          </Col>
          <Col className={styles.colRight} sm={12}>
            <a className={styles.link} href="javascript:void(0)">
              客服
            </a>
            <Dropdown overlay={(
                <Menu>
                  <Menu.Item key="">
                    <a href="/test">1st menu item</a>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <a href="/test2">2nd memu item</a>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <a href="/test3">3d menu item</a>
                  </Menu.Item>
                </Menu>
              )}>
              <a className={styles.link} href="javascript:void(0)">
                13336971320
                <Icon type="down"/>
              </a>
            </Dropdown>
          </Col>
        </Row>
      </div>
    </header>
  )
}

export default Header
