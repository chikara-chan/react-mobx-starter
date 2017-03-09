import React from 'react'
import styles from '../sass/Header'
import {Dropdown, Menu, Icon, Tooltip} from 'antd'
import ajax from 'shared/ajax'
import api from 'shared/api'
import localStorage from 'shared/localStorage'

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

function getMobile() {
  return localStorage.getItem('mobile')
}

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Tooltip placement="bottom" title={'400-091-1717'}>
          <a className={styles.link} href="javascript:void(0)">
            <Icon type="question-circle-o"/> 客服
          </a>
        </Tooltip>
        <Dropdown overlay={(
            <Menu>
              <Menu.Item key="">
                <a href="javascript:void(0)" onClick={handleLogout}>注销</a>
              </Menu.Item>
            </Menu>
          )}>
          <a className={styles.link} href="javascript:void(0)">
            {getMobile()} <Icon type="down"/>
          </a>
        </Dropdown>
      </div>
    </header>
  )
}

export default Header
