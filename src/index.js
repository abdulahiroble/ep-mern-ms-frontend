import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventDetails from './pages/EventDetails';

const rootElement = document.getElementById('app');
ReactDOM.render(

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<App/>}>
              <Route path='eventdetails' element={<EventDetails/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
  ,
  
);
reportWebVitals();
