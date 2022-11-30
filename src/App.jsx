import * as React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Button from './components/Button';
import {Col, Row, Input, Affix, Carousel} from 'antd';

// ==== COMPONENTS ====
import Cards from './components/Cards';
import Navigation from './components/Partials/Navigation';
import SliderComponent from './components/SliderComponent';
import Footer from './components/Partials/Footer';
// ==== OTHER ====
import LoadEventCollections from './services/collections/LoadEventCollections';
import LoadPropertyCollection from './services/collections/LoadPropertyCollections'
import Paginate from './components/Pagination';
import Category from './components/Category';


export default function App() {
  const [initialData, setInitialData] = useState([]);
  const [sliderImages, setSliderImages] = useState([])
  const [musicCategory, setMusicCategory] = useState([]);
  const [artsCategory, setArtsCategory] = useState([]);
  const [miscellaneous, setMiscellaneous] = useState([]);
  const [current, setCurrent] = useState(1);
  const {Search} = Input;

  useEffect(() => {

    async function loadData() {
      setInitialData(await LoadEventCollections.getAllEvents());
      setSliderImages(await LoadPropertyCollection.getSliderImages());

      const array = await LoadEventCollections.getAllEventsCategoryById();

      setMusicCategory(await LoadEventCollections.getEventsByCategory(array[0]))
      setArtsCategory(await LoadEventCollections.getEventsByCategory(array[1]))
      setMiscellaneous(await LoadEventCollections.getEventsByCategory(array[2]))
    }

    loadData()
  }, [])

  const nextPage = async (value) => {
    setInitialData(await LoadEventCollections.getNextEventPage(value));
    setCurrent(value)
  }

  const onSearch = async (value) => {
    if (value.length > 4) {
      alert("Postnummer skal være mindre end 4")
    } else if (value.match(/^[0-9]+$/) == null) {
      alert("Skal indeholde tal")
    } else {
      setInitialData(await LoadEventCollections.searchEvent(value));
    }
  }

  return (
    <Col>
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
          <Category musicCategory={musicCategory} artsCategory={artsCategory} miscellaneous={miscellaneous} />
          <Row>
            {initialData.data?._embedded.events.map((elm, index) => (
              <Cards link={elm.id} imgUrl={elm.images[0].url} name={elm.name} key={index} debug={true} />
            ))
            }
          </Row>
          <Paginate current={current} total={initialData.data?.page.totalPages} onChange={onChange => nextPage(onChange)} />
        </Col>
      </Row>
      <Footer />
    </Col>
  );
}
