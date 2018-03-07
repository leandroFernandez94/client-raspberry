import React, { Component } from 'react';
import { Layout } from 'antd';
import { HashRouter as Router, Switch } from 'react-router-dom'

import AppHeader from "./Header/Header.component";
import appRoutes from "./App.routes";

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
              {appRoutes}
            </Switch>
          </div>
        </Router>
      </Layout>
    )
  }
}

export default App;
