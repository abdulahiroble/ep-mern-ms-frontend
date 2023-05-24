// ====   MODULS ====
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Affix, Col } from 'antd';
// import '../Styles/Login.css';

// ==== COMPONENTS ====
import Navigation from '../components/Partials/Navigation';
import Footer from '../components/Partials/Footer';
import ContactFormComponent from '../components/ContactFormComponent';

// ==== OTHERS ====
import ApiContext from '../services/ApiContext';
import LoadTicketCollection from 'services/collections/LoadTicketCollection';

const TicketThread = () => {

    const params = useParams();
    console.log(params)

    const [initialData, setInitialData] = useState([]);

    useEffect(() => {
        async function loadData() {
            setInitialData(await LoadTicketCollection.getResponse());
        }

        loadData()
    }, [])

    return (
        <Col>
            <Affix>
                <Navigation />
            </Affix>
            <Col style={{ minHeight: "75vh" }}>
                <h3>Conversation</h3>
                { }
                {initialData.map((response) => {
                    if (params.id === response.nodeA.id) {
                        return (
                            <>
                                <p>{response.nodeA.firstname}: {response.nodeA.msg}</p>
                                <p>{`Admin: ${response.nodeB.msg}`}</p>
                            </>
                        )
                    }
                })
                }
            </Col>
            <Footer />
        </Col>
    )
}

export default TicketThread