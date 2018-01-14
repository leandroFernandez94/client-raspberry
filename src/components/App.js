import React, { Component } from 'react';
import { Layout } from 'antd';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import AppHeader from "./Header/Header.component";
import TabContent from "./TabContent/TabContent.component";
import { tabs, findDefaultTab } from '../services/Header.service';

import './App.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(tabSelected) {
    console.log(`tab selected: ${tabSelected.key}`)
  }

  render() {
    return (
      <Layout>
        <Router>
          <div>
            <AppHeader onTabChange={this.handleTabChange} />
            <Switch>
              <Route exact path="/" component={() => (<Redirect to={findDefaultTab.link} />)} />
              {tabs.map(tab => <Route key={tab.name} path={tab.link} component={() => <TabContent tab={tab} />} />)}
            </Switch>
          </div>
        </Router>
      </Layout>
    )
  }
}

export default App;
