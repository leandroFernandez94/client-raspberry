import React, { Component } from 'react';
import { Layout } from 'antd';

import AppHeader from "./Header/Header.component";
import TabContent from "./TabContent/TabContent.component";

import './App.css'

class App extends Component {

  constructor(props){
    super(props)

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(tabSelected){
    console.log(`tab selected: ${tabSelected.key}`)
  }

  render() {
    return (
      <Layout>
        <AppHeader onTabChange={this.handleTabChange}/>
        <TabContent />
      </Layout>
    )
  }
}

export default App;
