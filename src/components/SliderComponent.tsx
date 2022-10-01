import { Carousel, Col } from 'antd';
import 'antd/dist/antd.min.css';
import React from 'react';

// ==== COMPONENTS ====

// ==== OTHER ====


const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};



const SliderComponent = (props) => {
  console.log(props)
  return (
    <Carousel style={{height: "20%", border: "1px solid black"}} autoplay>

      {props.dataResult.data.object.map((elm,index)=>(
        <div key={index}>
          <img style={{width:"100%", height:"400px"}} src={elm.url} alt="image name"/>
          {/* <h3 style={contentStyle}>1</h3> */}
        </div>
      ))}
      {/* <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div> */}
    </Carousel>
  )
};

export default SliderComponent;

