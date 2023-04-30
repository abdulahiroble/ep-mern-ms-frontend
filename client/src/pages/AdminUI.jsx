import React from 'react';
import AdminNavavigation from '../components/adminComponents/AdminNavigation';
import AdminTicketList from '../components/adminComponents/AdminTicketList';
import Navigation from '../components/Partials/Navigation';
import Footer from '../components/Partials/Footer';
import {Affix, Col, Row} from 'antd';

const AdminUI = () => {

    return(
        <Col>
            <Affix>
                <Navigation/>
            </Affix>
            <Col>
                <Row>
                    <Col span={8}>
                        <AdminNavavigation/>
                    </Col>
                    <Col span={16}>
                        <AdminTicketList/>
                    </Col>
                </Row>
            </Col>
            <Footer/>
        </Col>
    )
}

export default AdminUI