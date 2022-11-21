import * as React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import SliderComponent from './components/SliderComponent';
import Button from './components/Button';
import {Col, Row, Input, Affix, Carousel} from 'antd';

// ==== COMPONENTS ====
import Cards from './components/Cards';
import Navigation from './components/Partials/Navigation';
import Footer from './components/Partials/Footer';
// ==== OTHER ====
import LoadEventCollections from './services/collections/LoadEventCollections';
import LoadPropertyCollection from './services/collections/LoadPropertyCollections'
import Paginate from './components/Pagination';

const {Search} = Input;


const alertTest = () => {
  alert("test")
}


export default function App() {
  const [initialData, setInitialData] = useState([]);
  const [sliderImages, setSliderImages] = useState([])
  const [defaultCurrent, setDefaultCurrent] = useState(1);


  useEffect(() => {

    async function loadData() {
      setInitialData(await LoadEventCollections.getAllEvents());
      setSliderImages(await LoadPropertyCollection.getSliderImages());

    }
    loadData()

  }, [])

  const onSearch = async (value) => {
    setInitialData(await LoadEventCollections.searchEvent(value));
  }

  return (
    <div>
      <Affix>
        <Navigation />
      </Affix>
      <Col type="flex" align="middle" style={{marginTop: "2%", marginBottom: "2%"}}>
        <h1>Event Planner</h1>
      </Col>
      {/* === SLIDER CAROUSEL === */}
      <SliderComponent dataResult={sliderImages} />

      <Row justify="center">
        <Col span={16} style={{marginTop: "5%"}}>
          {/* === SEARCH === */}
          <Search placeholder="input search text" onSearch={onSearch} enterButton />
          {/* === CARDS === */}
          <Row>
            {initialData.data?._embedded.events.map((elm, index) => (
              <Cards data={elm} key={index} debug={false} />
            ))
            }

          </Row>
          {/* {initialData.data?.page.map((elm, index) => (
            ))
          } */}
          <Paginate defaultCurrent={defaultCurrent} total={initialData.data.page.totalPages} />
        </Col>
        {/* <div className="container">
          <Pagination currentPage={currentPage} total={500} limit={20} onPageChange={page => setCurrentPage(page)} />
        </div> */}
      </Row>
      <Footer />
    </div>
  );
}
