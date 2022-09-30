import {Card} from 'antd';
import React from 'react';
const {Meta} = Card;

const Cards = (data) => {
  console.log(data.data.name);
  return (
    <Card
      hoverable
      style={{
        width: 240,
        margin: "2%"
      }}
      cover={<img alt="example" src={""} />}
    >
      <Meta title={data.data.name} />
    </Card>
  )
};

export default Cards;