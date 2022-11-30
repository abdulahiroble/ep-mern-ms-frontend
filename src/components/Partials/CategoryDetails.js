import * as React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Button from '../../components/Button';
import {Col, Row, Input, Affix, Carousel} from 'antd';

// ==== COMPONENTS ====
import Cards from '../../components/Cards';
import Navigation from '../../components/Partials/Navigation';
import SliderComponent from '../../components/SliderComponent';
import Footer from '../../components/Partials/Footer';
// ==== OTHER ====
import LoadEventCollections from '../../services/collections/LoadEventCollections';
import LoadPropertyCollection from '../../services/collections/LoadPropertyCollections'
import Paginate from '../../components/Pagination';
import Category from '../../components/Category';
import {useParams} from 'react-router-dom';

const CategoryDetails = () => {
  const [initialData, setInitialData] = useState([]);
  const [sliderImages, setSliderImages] = useState([])
  const [current, setCurrent] = useState(1);
  const [category, setCategory] = useState([]);
  const {Search} = Input;
  const params = useParams();

  useEffect(() => {

    async function loadData() {
      setInitialData(await LoadEventCollections.getEventsByCategory(params.id));
      setSliderImages(await LoadPropertyCollection.getSliderImages());
    }

    loadData()
  }, [])

  const onSearch = async (value) => {
    if (value.length > 4) {
      alert("Postnummer skal være mindre end 4")
    } else if (value.match(/^[0-9]+$/) == null) {
      alert("Skal indeholde tal")
    } else {
      setInitialData(await LoadEventCollections.searchEvent(value));
    }
  }

  const categoryImage = () => {
    if (params.id === "KZFzniwnSyZfZ7v7nJ") {
      return "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    } else if (params.id === "KZFzniwnSyZfZ7v7n1") {
      return "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    } else {
      return "https://images.unsplash.com/photo-1572953109213-3be62398eb95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
  }

  return (
    <Col>
      <Affix>
        <Navigation />
      </Affix>
      {/* === SLIDER CAROUSEL === */}
      <SliderComponent dataResult={sliderImages} />
      <Col type="flex" align="middle" style={{marginTop: "2%", marginBottom: "2%"}}>
        <h1>{initialData.data?.name} Category</h1>
      </Col>
      <Row justify="center">
        <Col span={16} style={{marginTop: "5%"}}>
          {/* === SEARCH === */}
          <Search placeholder="input search text" onSearch={onSearch} enterButton />
          {/* === CARDS === */}
          <Row>
            {initialData.data?._embedded.genres.map((elm, index) => (
              <Cards name={elm.name} imgUrl={categoryImage()} key={index} debug={false} />
            ))
            }
          </Row>
        </Col>
      </Row>
      <Footer />
    </Col>
  )
}

export default CategoryDetails