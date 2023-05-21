import React from 'react';
import AdminNavavigation from '../components/adminComponents/AdminNavigation';
import AdminLogList from '../components/adminComponents/AdminLogList';
import Navigation from '../components/Partials/Navigation';
import Footer from '../components/Partials/Footer';
import {Affix, Col, Row} from 'antd';
import LoadLogsCollection from '../services/collections/LoadLogsCollection';
import {useState, useEffect} from 'react';

const AdminLog = () => {
const [initialData, setInitialData] = useState([]);
const [loading, setLoading] = useState(true);


    useEffect(()=>{
        async function loadData(){
          setInitialData(await LoadLogsCollection.getLogs());
          setLoading(false);
        }
        loadData();
      },[])

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
                        {loading ?  null : <AdminLogList data={initialData}/>}
                        
                    </Col>
                </Row>
            </Col>
            <Footer/>
        </Col>
    )
}

export default AdminLog