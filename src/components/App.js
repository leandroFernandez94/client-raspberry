import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

import AppHeader from "./Header/Header.component";

import './App.css'

const { Header, Content, Footer } = Layout;


class App extends Component {
  render() {
    return (
      <Layout>
        <AppHeader />
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24 }}>Content</div>
        </Content>
      </Layout>
    )
  }
}

export default App;
