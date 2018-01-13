import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

import './Header.css'

const { Header } = Layout;

class AppHeader extends Component {
  render() {
    return (
      <Header className="header">
          <Menu
            className="menu"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1">Movies</Menu.Item>
            <Menu.Item key="2">Photos</Menu.Item>
            <Menu.Item key="3">TV Shows</Menu.Item>
            <Menu.Item key="4">Concerts</Menu.Item>
            <Menu.Item key="5">Backups</Menu.Item>
          </Menu>
        </Header>
    );
  }
}

export default AppHeader;