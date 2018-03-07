import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { tabs, findDefaultTab } from "../services/Header.service";
import TabContent from "./TabContent/TabContent.component";
import DetailsComponent from './Details/DetailsComponent';

const defaultTab = findDefaultTab().link

const defaultRoute = (
  <Route key="defaultRoute" exact path="/" render={() => (<Redirect to={defaultTab} />)} />
)

const appRoutes = tabs.map(
  tab => 
  <Route
    exact
    key={tab.name}
    path={tab.link}
    render={() => <TabContent tab={tab.name} />}
  />
)

const detailsRoutes = tabs.map(
  tab =>
  <Route
    key={tab.name.concat('-details')}
    path={tab.link.concat('/:item')}
    component={DetailsComponent}
  />
)

export default [defaultRoute, appRoutes, detailsRoutes]