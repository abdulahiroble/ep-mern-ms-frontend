import {Card} from 'antd';
import React from 'react';
const {Meta} = Card;

const Cards = ({data, debug}) => {
  if(debug) console.log(data.data);
  console.log(debug)
  return (
    <Card
      hoverable
      style={{
        width: 240,
        margin: "2%"
      }}
      cover={<img alt="example" src={data.images[0].url} />}
    >
      <Meta title={data.name} />
    </Card>
  )
};

export default Cards;