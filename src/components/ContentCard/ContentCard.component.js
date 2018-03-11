import React from 'react';
import { Card } from 'antd';
import * as moment from 'moment';

import "./ContentCard.css";

const { Meta } = Card

const ContentCard = ({title, posterPath, releaseDate}) => {
  return (
    <Card
      className="card"
      hoverable
      cover={<img alt="noimg" src={posterPath} />}
    >
      <Meta
        title={title}
        description={moment(releaseDate).format('(YYYY)')}
      />

    </Card>
  );
};

export default ContentCard;