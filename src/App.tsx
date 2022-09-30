import React from 'react';
import { Link } from 'react-router-dom';
import SliderComponent from './components/SliderComponent';
import Button from './components/Button';
import {Col, Row, Input} from 'antd';
import LoadEventCollections from './services/collections/LoadEventCollections';

// ==== COMPONENTS ====
import Cards from './components/Cards';


// ==== OTHER ====
const { Search } = Input;


const alertTest = ()=>{
  alert("test")
}



const onSearch = async (value: string) => console.log(await LoadEventCollections.searchEvent(value));

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <SliderComponent/>
      <Button onClick={alertTest} text="Click me"/>
      <div style={{border: '1px solid black'}}>
        <p>Dette er et event
        <Link to="/eventdetails">Dette er et link til et event</Link>
        </p>
      </div>
      <div style={{border: '1px solid black'}}>
        <p>Dette er et event
        <Link to="/eventdetails2">Dette er et link til et event 2</Link>
        </p>
      </div>
      <Row justify="center">
        <Col span={16}  style={{marginTop:"5%"}}>
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
        <Row>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </Row>
        </Col>
      </Row>
    </div>
  );
}
