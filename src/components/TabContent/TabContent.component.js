import React from 'react'

import { Layout } from 'antd'

const { Content } = Layout;

const TabContent = () => {
  return (
    <Content style={{ padding: '0 50px' }}>
      <div style={{ background: '#fff', padding: 24 }}>Content</div>
    </Content>
  );
};

export default TabContent;