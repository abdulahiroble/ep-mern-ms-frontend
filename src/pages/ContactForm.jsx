// ====   MODULS ====
import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Affix, Col, Button, Checkbox, Form, Input } from 'antd';
// import '../Styles/Login.css';

// ==== COMPONENTS ====
import Navigation from '../components/Partials/Navigation';
import Footer from '../components/Partials/Footer';
import ContactFormComponent from '../components/ContactFormComponent';

// ==== OTHERS ====
import ApiContext from '../services/ApiContext';

export default function EventDetails() {
  const [initialData, setInitialData] = useState([]);
  
  console.log("INITIAL====",initialData)
    return(
        <Col>
          <Affix>
            <Navigation/>
          </Affix>
            <Col className='Logincontainer' span={24}>
              <ContactFormComponent initialData={initialData}/> 
            </Col>
          <Footer/>
        </Col>
    )
}