import React from 'react';
import {Row, Col} from 'antd';
import {Link} from 'react-router-dom';

const footerOptions = {
    height:"250px",
    backgroundColor:"#001529"
}

const Footer = ()=>{
 return(
    <Col  style={footerOptions}>
        <Row justify="center">
            <Col span={24} type="flex" align="middle" style={{marginTop:"3%"}}>
                <Link to={"/"}>Contact</Link>
            </Col>
            <Col span={24} type="flex" align="middle">
                <Link to={"/"}>FAQ</Link>
            </Col>
        </Row>
        
    </Col>
 )
}

export default Footer;