import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import styles from './index.scss';


@inject('loadingStore')
@observer
class Loading extends PureComponent {

  render() {
    const loadingStore = this.props.loadingStore;
    let loadingTpl = loadingStore.isShowLoading ?  (
      <div className={styles.loading}>
        <div className={styles.circleBack}>
          <div className={styles.img}></div>
        </div>
        <div className={styles.circleOut}></div>
      </div>
      ) : (<div></div>)

    return loadingTpl;
  }
}

export default Loading
