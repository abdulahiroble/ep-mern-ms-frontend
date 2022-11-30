import {Card} from 'antd';
import {Link} from 'react-router-dom';
import React from 'react';
const {Meta} = Card;

const Cards = ({link, imgUrl, name, debug}) => {
  if (debug) console.log(link, imgUrl, name);

  return (
    <a href={`/eventdetails/${link}`}
      style={{
        width: 240,
        margin: "2%"
      }}>
      <Card
        hoverable
        cover={<img alt="example" src={imgUrl} />}
      >
        <Meta title={name} />
      </Card>
    </a>
  )
};

export default Cards;