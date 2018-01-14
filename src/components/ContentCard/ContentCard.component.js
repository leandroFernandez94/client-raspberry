import React from 'react';
import { Card } from 'antd';

import "./ContentCard.css";

const { Meta } = Card

const ContentCard = ({children}) => {
  return (
    <Card
      className="card" 
      hoverable
      cover={<h1>Movie picture</h1>}
    >
      <Meta
        title={children}
        description ={'details...'}
      />

    </Card>
  );
};

export default ContentCard;