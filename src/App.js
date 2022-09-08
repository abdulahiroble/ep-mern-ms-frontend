import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <Carousel/>
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
