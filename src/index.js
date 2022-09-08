import  React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import EventDetail from './pages/EventDetails'
import EventDetail2 from './pages/EventDetails2'
import './index.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
        <Route path="eventdetails" element={<EventDetail />} />
        <Route path="eventdetails2" element={<EventDetail2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
