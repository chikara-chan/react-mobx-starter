import React, {PureComponent} from 'react'
import {observer, inject} from 'mobx-react'
import styles from './index.scss';
import {Alert} from 'antd';



@observer
class Toast extends PureComponent {

  render() {

    // const loadingStore = this.props.loadingStore;
    // let loadingTpl = loadingStore.isShowLoading ?  (
    //   <div className={styles.loading}>
    //     <div className={styles.circleBack}>
    //       <div className={styles.img}></div>
    //     </div>
    //     <div className={styles.circleOut}></div>
    //   </div>
    //   ) : (<div></div>)

    return (
      <div className="alert">
        <Alert banner={true}
          message="success tips"
          description="Detailed description and advices about successful copywriting."
          type="success"
          showIcon
        />
      </div>
      );
  }
}

export default Toast
