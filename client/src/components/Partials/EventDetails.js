import React, { Component } from 'react';
import {Col, Row, Input, Affix, Carousel} from 'antd';
import {Link} from 'react-router-dom';

// ==== COMPONENTS ====
import GoogleMap from '../GoogleMap'

export default function EventDetailsPartial({data}){
    // console.log("PROPS===",data.sales.public.startDateTime.splice(0,10))
    const startDate = data.sales.public.startDateTime;
    const priceRange = data.priceRanges.length;
    console.log("PRICE RANGE ==",data.images.length)
      return(
        <Col>
          <Col style={{backgroundColor:"black", padding:"3%"}}>
            <Col type="flex" align="middle" style={{marginBottom:"2%"}}>
              <h1 style={{color:"white"}}>{data.name}</h1>
            </Col>
            <Col type="flex" align="middle">
              <img src={data.images[0].url} style={{maxWidth:"50%"}}/>
            </Col>
          </Col>
          <Row>
            <Col span={12} type="flex" align="middle" style={{backgroundColor:"green",padding:"3%", fontSize:"20px"}}>
              <Col span={24}>Event starter {data.dates.start.localDate}</Col>
              <Col span={24}>Promoveres af {data.promoter.name}</Col>
              <Col span={24}>Genre {data.classifications[0].segment.name}</Col>
              <Col span={24}>Billetsalg starter d. {data.sales.public.startDateTime.substring(0,10)}</Col>
              <Col span={24}>Billetsalg slutter d. {data.sales.public.endDateTime.substring(0,10)}</Col>
              <Col span={24}>Piser fra {data.priceRanges[0].min}.- til {data.priceRanges[1].max} .-</Col>
              <Col span={24}><a href={data.promoter.name}>Køb biletter</a></Col>
            </Col>
            <Col span={12} type="flex" align="middle" style={{backgroundColor:"yellow",padding:"3%"}}>
              <img src={data.images[data.images.length-1].url} style={{maxWidth:"100%", display:"block"}}/>

            </Col>
          </Row>
          <GoogleMap data={data} coordinates={{lat : parseFloat(data._embedded.venues[0].location.latitude), lng : parseFloat(data._embedded.venues[0].location.longitude)}}/>
      </Col>
    )

}