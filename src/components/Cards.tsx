import { Card } from 'antd';
import React from 'react';
const { Meta } = Card;

const Cards = () => (
  <Card
    hoverable
    style={{
      width: 240,
      margin:"2%"
    }}
    cover={<img alt="example" src="https://1xb9vzi91is1ib6z1qfm3ams-wpengine.netdna-ssl.com/wp-content/uploads//2019/11/hanny-naibaho-aWXVxy8BSzc-unsplash-1024x683.jpg" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);

export default Cards;