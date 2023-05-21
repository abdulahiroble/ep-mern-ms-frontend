import axios from 'axios';


let url = process.env.REACT_APP_PRODUCTION_SEARCH_SERVICE_URL;
if (process.env.REACT_APP_ENVIRONMENT != 'prod') {
    url = process.env.REACT_APP_DEVELOPMENT_SEARCH_SERVICE_URL;
}

console.log("ENVIRONMENT===",process.env.REACT_APP_ENVIRONMENT)
console.log("URL===",url)
class LoadEventCollections {
    searchEvent = async (input) => {
        const data = {
            'zipcode': input
        }
        const result = await axios.post(`${url}/searchEvents`, data);

        return result
    }

    getNextEventPage = async (input) => {
        const data = {
            'page': input
        }
        const result = await axios.post(`${url}/nextEventPage`, data);
        return result
    }

    getAllEvents = async () => {
        const result = await axios.get(`${url}/allEvents`);

        return result
    }

    getAllEventsCategoryById = async () => {
        const result = await axios.get(`${url}/allEvents`);

        const duplicate = result.data._embedded.events.map((elm) => elm.classifications[0].segment.id)

        let uniqueItems = [...new Set(duplicate)]

        return uniqueItems
    }

    getEventsByCategory = async (input) => {

        const data = {
            'category': input
        }
        const result = await axios.post(`${url}/eventsByCategory`, data);
        return result
    }

    fetchEvent = async (id) => {
        const result = await axios.get(`${url}/fetchEvent/${id}`)
        return result.data;
    }
}

export default new LoadEventCollections();