import React, {PureComponent} from 'react'
import {Link} from 'react-router'
import styles from '../sass/MainSection'
import {Button} from 'antd'
import localStorage from 'shared/localStorage'

class MainSection extends PureComponent {
  render() {
    return (
      <div className={styles.mainSection}>
        <div className={styles.title}>账号信息</div>
        <div className={styles.content}>
          <div className={styles.field}>
            <span className={styles.desc}>登录账号</span>
            <span className={styles.desc}>{localStorage.getItem('mobile')}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.desc}>登录密码</span>
            <span className={styles.desc}>{'********'}</span>
            <Link className={styles.link} to="/password">修改密码</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default MainSection
