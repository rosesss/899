import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'
// import { observer, inject } from 'mobx-react';
// import { computed } from 'mobx';

import HomePage from './HomePage';
import SeoPage from './SeoPage';
import DeepPromote from './DeepPromote';
import CaseSeo from './CaseSeo';
import Class from './Class';
import AboutUs from './AboutUs';
import Detail from './Detail';
import ClassDetail from './ClassDetail';
import Header from './component/header';
import Navigation from './component/Navigation';
import Banner from './component/Banner';
import Footer from './component/Footer';

class PageIndex extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Navigation {...this.props}></Navigation>
        <Banner></Banner>
        <div>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/fastrowseo" component={SeoPage} />
            <Route path="/deeppromote" component={DeepPromote} />
            <Route path="/caseseo" component={CaseSeo} />
            <Route path="/class" component={Class} />
            <Route path='/aboutus' component={AboutUs}/>
            <Route path="/detail/:id/:type" component={Detail} />
            <Route path="/classdetail/:id" component={ClassDetail}/>
            <Redirect exact from="/" to="/home" />
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default PageIndex;
