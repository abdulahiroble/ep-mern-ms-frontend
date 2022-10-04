import { Carousel, Col } from 'antd';
import 'antd/dist/antd.min.css';
import React from 'react';

// ==== COMPONENTS ====

// ==== OTHER ====

const SliderComponent = (props) => {
  return (
    <Carousel style={{height: "20%", border: "1px solid black"}} autoplay>
      {props.dataResult.length != 0 ?  props.dataResult.data.object.map((elm,index)=>(
        <div key={index}>
          <img style={{width:"100%", height:"400px"}} src={elm.url} alt="image name"/>
        </div>
      )) : null}
    </Carousel>
  )
};

export default SliderComponent;

