// ====   MODULS ====
import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Affix, Col, Button, Checkbox, Form, Input } from 'antd';
// import '../Styles/Login.css';

// ==== COMPONENTS ====
import Navigation from '../components/Partials/Navigation';
import Footer from '../components/Partials/Footer';
import ProfileComponent from '../components/ProfileComponent';

// ==== OTHERS ====
import ApiContext from '../services/ApiContext';

export default function EventDetails() {
  const [initialData, setInitialData] = useState([]);
  const params = useParams();

  useEffect(()=>{
    async function loadData(){
      setInitialData(await ApiContext.LoadUserCollection.getUserProfile(params.id));

    }

    loadData();

  },[])
  
  console.log("INITIAL====",initialData)
    return(
        <Col>
          <Affix>
            <Navigation/>
          </Affix>
            <Col className='Logincontainer' span={24}>
              {initialData.length !== 0 ? <ProfileComponent initialData={initialData}/> : null}
            </Col>
          <Footer/>
        </Col>
    )
}