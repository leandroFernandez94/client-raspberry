import React from 'react'
import { Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'

import { tabs, findDefaultTab } from '../../services/Header.service';

import './Header.css'

const { Header } = Layout

const itemComponents = tabs.map(
    tab => <Menu.Item key={tab.name}><NavLink to={tab.link}>{tab.placeholder}</NavLink></Menu.Item>
  )


const AppHeader = ({onTabChange}) => (
  <Header className="header">
    <Menu
      className="menu"
      theme="dark"
      mode="horizontal"
      onSelect={onTabChange}
      defaultSelectedKeys={[findDefaultTab().name]}
    >
      { itemComponents }
    </Menu>
  </Header>
)

export default AppHeader;