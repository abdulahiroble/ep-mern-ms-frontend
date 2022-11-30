import React from 'react';
import App from './App';
import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//history
import {ProtectedRoute} from './services/MiddleWare/ProtectedRoute';

//pages
import EventDetail from './pages/EventDetails'
import EventDetail2 from './pages/EventDetails2'
import Profile from './pages/profile'
import './index.css';
import Login from './pages/Login';

import Registration from './pages/Registration';
import CategoryDetails from './components/Partials/CategoryDetails';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Routes>

      <Route
        path="/eventdetails2"
        element={
          <ProtectedRoute>
            <EventDetail2 />
          </ProtectedRoute>
        }
      />

      <Route path='login' element={<Login />} />
      <Route path='/' element={<App />} />
      <Route path="eventdetails/:id" element={<EventDetail />} />
      <Route path="eventdetails3" element={<EventDetail2 />} />
      <Route path="profile/:id" element={<Profile />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="categoryDetails/:id" element={<CategoryDetails />} />
      {/* <Navigate to='/'/> */}
    </Routes >
  </BrowserRouter >,
  rootElement
  //test
);

export default Routes;
