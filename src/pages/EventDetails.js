import * as React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Col, Row, Input, Affix, Carousel} from 'antd';

// ==== COMPONENTS ====
import Navigation from '../components/Partials/Navigation';
import Footer from '../components/Partials/Footer';
import EventDetailsPartial from '../components/Partials/EventDetails'

// ==== OTHER ====
import LoadEventCollections from '../services/collections/LoadEventCollections';
import LoadPropertyCollection from '../services/collections/LoadPropertyCollections'
import ApiContext from '../services/ApiContext';

export default function EventDetails() {
  const [initialData, setInitialData] = useState([]);
  const params = useParams();

  useEffect(() => {

    async function loadData() {
      setInitialData(await ApiContext.LoadEventCollections.fetchEvent(params.id))
    }
    loadData()

  }, [])

    return(
        <main>
          <div>
            <Affix>
            <Navigation/>
            </Affix>
              {initialData.length == 0 ? null : <EventDetailsPartial data={initialData}/>}
            <Footer/>
          </div>
        </main>
    )
}