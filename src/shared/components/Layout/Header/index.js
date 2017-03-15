import React from 'react'
import styles from './index.scss'
import { Dropdown, Menu, Icon } from 'antd'
import ajax from 'shared/utils/ajax'
import api from 'shared/utils/api'

function handleLogout() {
  ajax({
    url: api.logout,
    data: {
      role: 'seller'
    }
  }).then(() => {
    location.replace('./member.html')
  })
}

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Dropdown overlay={(
          <Menu>
            <Menu.Item>
              <a href="javascript:void(0)" onClick={handleLogout}>注销</a>
            </Menu.Item>
          </Menu>
        )}>
          <a className={styles.link} href="javascript:void(0)">
            13336971320<Icon type="down" />
          </a>
        </Dropdown>
      </div>
    </header>
  )
}

export default Header
