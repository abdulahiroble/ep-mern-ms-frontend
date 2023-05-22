// #region ==== MODULS ====
import React from 'react';
import App from './App';
import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from "axios";
// #endregion

// #region ==== PAGES ====
import EventDetail from './pages/EventDetails'
import EventDetail2 from './pages/EventDetails2'
import ContactForm from './pages/ContactForm'
import Profile from './pages/profile'
import Registration from './pages/Registration';
import CategoryDetails from './components/Partials/CategoryDetails';
import Login from './pages/Login';
import AdminUI from 'pages/AdminUI';
import UserActivate from 'pages/UserActivate';
import AdminLog from './pages/AdminLogfiles'
// #endregion

//#region ==== OTHER ====
import {ProtectedRoute} from './services/MiddleWare/ProtectedRoute';
import {ProtectedAdminRoute} from './services/MiddleWare/ProtectedAdminRoute';
import AxiosSetup from './config/AxiosSetup'
import './index.css';
// #endregion

// AxiosSetup();
// http();

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
      <Route path="contact" element={<ContactForm />} />
      <Route path="activate/:token" element={<UserActivate />} />
      <Route path="admin" element={<ProtectedAdminRoute><AdminUI /></ProtectedAdminRoute>} />
      <Route path="admin/logs" element={<ProtectedAdminRoute><AdminLog/></ProtectedAdminRoute>} />

      {/* <BrowserRouter>
        <Routes>
          <Route path="*" element={<ContactForm />} />
        </Routes>
      </BrowserRouter> */}

      <Route
        path="profile/:id"
        element={<ProtectedRoute><Profile /></ProtectedRoute>
        }
      />
      <Route path="/Registration" element={<Registration />} />
      <Route path="categoryDetails/:id" element={<CategoryDetails />} />
    </Routes >
  </BrowserRouter >,
  rootElement
  //test
);

export default Routes;
