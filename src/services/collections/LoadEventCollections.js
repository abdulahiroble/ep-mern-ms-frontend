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

        return result
    }

    getAllEventsCategoryById = async () => {
        const result = await axios.get(`${url}/api/allEvents`);

        const duplicate = result.data._embedded.events.map((elm) => elm.classifications[0].segment.id)

        let uniqueItems = [...new Set(duplicate)]

        console.log(uniqueItems)

        return uniqueItems
    }

    getEventsByCategory = async (input) => {

        const data = {
            'category': input
        }
        const result = await axios.post(`${url}/api/eventsByCategory`, data);
        return result
    }

    fetchEvent = async (id) => {
        const result = await axios.get(`${url}/api/fetchEvent/${id}`)
        return result.data;
    }
}

export default new LoadEventCollections();