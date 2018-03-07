import React from 'react';
import { Card } from 'antd';

import "./ContentCard.css";

const { Meta } = Card

const ContentCard = ({ children, onItemClick }) => {
  const { filename } = children
  return (
    <Card
      className="card"
      hoverable
      cover={<h1>Movie picture</h1>}
      onClick={() => onItemClick(filename)}
    >
      <Meta
        title={filename}
        description={'generos...'}
      />

    </Card>
  );
};

export default ContentCard;