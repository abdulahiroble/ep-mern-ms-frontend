import React from 'react';
import { Link } from 'react-router-dom';
import SliderComponent from './components/SliderComponent';
import Button from './components/Button';

const alertTest = ()=>{
  alert("test")
}

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
    </div>
  );
}
