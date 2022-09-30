import { Card } from 'antd';
import React from 'react';
const { Meta } = Card;

const Cards = (data) => {
  console.log(data);
  return(
  <Card
    hoverable
    style={{
      width: 240,
      margin:"2%"
    }}
    cover={<img alt="example" src={""} />}
  >
    <Meta title={data.name} description={data.promoter.name} />
  </Card>
  )
};

export default Cards;