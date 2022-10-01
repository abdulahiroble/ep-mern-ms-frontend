import * as React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import SliderComponent from './components/SliderComponent';
import Button from './components/Button';
import {Col, Row, Input} from 'antd';
import LoadEventCollections from './services/collections/LoadEventCollections';

// ==== COMPONENTS ====
import Cards from './components/Cards';
import Header from './components/Partials/Header';
import Footer from './components/Partials/Footer';
// ==== OTHER ====
const {Search} = Input;


const alertTest = () => {
  alert("test")
}


export default function App() {
  const [searchEvents, setSearchedEvents] = useState([]);
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {

    async function loadData() {
      setInitialData(await LoadEventCollections.getAllEvents());
    }

    loadData()

  }, [])


  const onSearch = async (value: any) =>{
    // setInitialData([]);
    setInitialData(await LoadEventCollections.searchEvent(value));
  } 


  return (
    <div>
      <Header/>
      <h1>Bookkeeper</h1>
      <SliderComponent />
      <Button onClick={alertTest} text="Click me" />
      <div style={{border: '1px solid black'}}>
        <p>Dette er et event
          <Link to="/eventdetails">Dette er et link til et event</Link>
        </p>
      </div>
      <div style={{border: '1px solid black'}}>
        <p>Dette er et event
          <Link to="/eventdetails2">Dette er et link til et event 2</Link>
        </p>
      </div>
      <Row justify="center">
        <Col span={16} style={{marginTop: "5%"}}>
          <Search placeholder="input search text" onSearch={onSearch} enterButton />
          <Row>

              {initialData.map((elm, index) => (
                // <div key={index}>
                  <Cards data={elm} debug={false}/>
                // </div>
              ))
            }

          </Row>
        </Col>
      </Row>
      <Footer/>
    </div>
  );
}
