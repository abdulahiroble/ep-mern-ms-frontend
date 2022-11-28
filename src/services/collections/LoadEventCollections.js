import axios from 'axios';


let url;
if (process.env.Node_env != 'production') {
    url = process.env.REACT_APP_DEVELOPMENT_URL;
}
class LoadEventCollections {
    searchEvent = async (input) => {
        const data = {
            'zipcode': input
        }
        const result = await axios.post(`${url}/api/searchEvents`, data);

        return result
    }

    getNextEventPage = async (input) => {
        const data = {
            'page': input
        }
        const result = await axios.post(`${url}/api/nextEventPage`, data);
        return result
    }

    getAllEvents = async () => {
        const result = await axios.get(`${url}/api/allEvents`);

        // console.log(result.data._embedded.events.map((elm) => elm.classifications.map((elm) => elm.segment.id)))

        // console.log(result.data._embedded.events.map((elm) => elm.classifications[0].segment.id))

        return result
    }

    getEventsByCategory = async (input) => {
        const data = {
            'category': input
        }
        const result = await axios.post(`${url}/api/eventsByCategory`, data);
        console.log(result)
        return result
    }

    fetchEvent = async (id) => {
        const result = await axios.get(`${url}/api/fetchEvent/${id}`)
        return result.data;
    }
}

export default new LoadEventCollections();