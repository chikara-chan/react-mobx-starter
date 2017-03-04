import React from 'react'
import {Breadcrumb} from 'antd'
import styles from './index.scss'

function BreadcrumbLayout(props) {
  const {titles, children} = props

  return (
    <div className={styles.breadcrumbLayout}>
      <Breadcrumb className={styles.breadcrumb}>
        {titles.map(title =>
          <Breadcrumb.Item>
            <a className={styles.link} href={title.href}>{title.name}</a>
          </Breadcrumb.Item>
        )}
      </Breadcrumb>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}

export default BreadcrumbLayout
