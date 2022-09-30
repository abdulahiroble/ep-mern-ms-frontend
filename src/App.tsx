import * as React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import SliderComponent from './components/SliderComponent';
import Button from './components/Button';
import {Col, Row, Input} from 'antd';
import LoadEventCollections from './services/collections/LoadEventCollections';

// ==== COMPONENTS ====
import Cards from './components/Cards';


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


  const onSearch = async (value: any) => setSearchedEvents(await LoadEventCollections.searchEvent(value));


  return (
    <div>
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
            {searchEvents.length > 0 ? searchEvents.map((elm, index) => (
              <Cards data={elm} key={index} />

            )) :
              initialData.map((elm, index) => (
                <Cards data={elm} key={index} />

              ))
            }

          </Row>
        </Col>
      </Row>
    </div>
  );
}
