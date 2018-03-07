import React from 'react';
import { Layout } from 'antd'

import './DetailsComponent.css'

const { Content } = Layout;

const DetailsComponent = ({match}) => (
  <Content className="container">
    <div className="content">
      <h2>{match.params.item}</h2>
    </div>
  </Content>
);

export default DetailsComponent;