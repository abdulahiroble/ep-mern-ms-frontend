// ====   MODULS ====
import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Affix, Col} from 'antd';
// import '../Styles/Login.css';

// ==== COMPONENTS ====
import Navigation from '../components/Partials/Navigation';
import Footer from '../components/Partials/Footer';
import ContactFormComponent from '../components/ContactFormComponent';

// ==== OTHERS ====
import ApiContext from '../services/ApiContext';

const UserActivate = () => {

    const params = useParams();
    console.log(params)


    return (
        <Col>
            <Affix>
                <Navigation />
            </Affix>
                <Col style={{minHeight:"75vh"}}>
                    <p>Thank you for activating your Account!</p>
                </Col>
            <Footer />
        </Col>
    )
}

export default UserActivate