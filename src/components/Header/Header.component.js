import React from 'react'
import { Layout, Menu } from 'antd'

import { tabs } from '../../services/Header.service';

import './Header.css'

const { Header } = Layout

const itemComponents = tabs.map(
    tab => <Menu.Item key={tab.name}>{tab.placeholder}</Menu.Item>
  )

const findDefaultKey = () => {
  const defaultTab = tabs.find(
    tab => tab.default
  ) || tabs[0]

  return new Array(defaultTab.name)
}

const AppHeader = ({onTabChange}) => (
  <Header className="header">
    <Menu
      className="menu"
      theme="dark"
      mode="horizontal"
      onSelect={onTabChange}
      defaultSelectedKeys={findDefaultKey()}
    >
      { itemComponents }
    </Menu>
  </Header>
)

export default AppHeader;