import * as React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import SliderComponent from './components/SliderComponent';
import Button from './components/Button';
import {Col, Row, Input, Affix, Carousel} from 'antd';

// ==== COMPONENTS ====
import Cards from './components/Cards';
import Header from './components/Partials/Header';
import Footer from './components/Partials/Footer';
// ==== OTHER ====
import LoadEventCollections from './services/collections/LoadEventCollections';
import LoadPropertyCollection from './services/collections/LoadPropertyCollections'

const {Search} = Input;


const alertTest = () => {
  alert("test")
}


export default function App() {
  const [initialData, setInitialData] = useState([]);
  const [sliderImages, setSliderImages] = useState([])
  const [top, setTop] = useState(2);

  useEffect(() => {

    async function loadData() {
      setInitialData(await LoadEventCollections.getAllEvents());
      setSliderImages(await LoadPropertyCollection.getSliderImages());
    }

    loadData()

  }, [])

  console.log(sliderImages)
  const onSearch = async (value) =>{
    // setInitialData([]);
    setInitialData(await LoadEventCollections.searchEvent(value));
  } 


  return (
    <div>
      <Affix>
      <Header/>
      </Affix>

      <Col type="flex" align="middle" style={{marginTop:"2%", marginBottom:"2%"}}>
        <h1>Event Planner</h1>
      </Col>

        <Carousel style={{height: "20%", border: "1px solid black"}} autoplay>

          <SliderComponent dataResult={sliderImages} />
        </Carousel>
        
      <Row justify="center">
        <Col span={16} style={{marginTop: "5%"}}>
          <Search placeholder="input search text" onSearch={onSearch} enterButton />
          <Row>

              {initialData.map((elm, index) => (
                // <div key={index}>
                  <Cards data={elm} key={index} debug={false}/>
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
