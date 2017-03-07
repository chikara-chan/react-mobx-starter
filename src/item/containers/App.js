import React, {PureComponent} from 'react'
import styles from '../sass/App'
import ItemEdit from '../components/ItemEdit'
import ItemList from '../components/ItemList'
import Loading from '../components/Loading';
import {observer, inject} from 'mobx-react'
import BreadcrumbLayout from 'shared/components/BreadcrumbLayout'
import {Router,Route,Link,hashHistory} from 'react-router';
console.log(Router,Route);

// var ReactRouter = require('react-router');
// // const Router = ReactRouter.Router;
// const Route = ReactRouter.Route;
// const Link = ReactRouter.Link;
// const hashHistory = ReactRouter.hashHistory;




@inject('breadcrumbStore')
@observer
class App extends PureComponent {
  render() {
    let breadcrumbStore = this.props.breadcrumbStore;
    // console.log(Router);
    return (

      <BreadcrumbLayout titles={breadcrumbStore.BreadcrumbConfig}>
        <div className={styles.app}>
          <Router history={hashHistory}>
            <Route path="/" component={ItemList}/>
            <Route path="/edit" component={ItemEdit}/>
          </Router>
          <Loading></Loading>
        </div>
      </BreadcrumbLayout>

    )
  }
}

export default App
/*

 <Router history={hashHistory}>
          <Route path="/" component={ItemEdit}/>
        </Router>


      <div className={styles.app}>
          <ItemEdit/>
          <Loading/>
      </div>
*/
