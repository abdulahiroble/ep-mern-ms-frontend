import {Card} from 'antd';
import {Link} from 'react-router-dom';
import React from 'react';
const {Meta} = Card;

const Cards = ({data, debug}) => {
  if(debug) console.log(data.data);
  console.log(debug)
  return (
    <a href={data.url}   
    style={{
      width: 240,
      margin: "2%"
    }}>
    <Card
      hoverable
      cover={<img alt="example" src={data.images[0].url} />}
    >
      <Meta title={data.name} />
    </Card>
  </a>
  )
};

export default Cards;