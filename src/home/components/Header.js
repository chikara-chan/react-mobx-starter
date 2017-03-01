import React, {PureComponent} from 'react'
import styles from '../sass/Header'
import Shop from './Shop'
import {Button, Row, Col, Icon} from 'antd'

class Header extends PureComponent {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.container}>
          请选择收货城市
          <a className={styles.link} href="javascript:void(0)">
            杭州
            <Icon type="down"/>
          </a>
        </div>
      </div>
    )
  }
}

export default Header
