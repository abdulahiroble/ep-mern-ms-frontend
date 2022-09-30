import axios from 'axios';


let url;
if (process.env.Node_env != 'production') {
    url = "http://localhost:8080"
}
class LoadEventCollections {
    searchEvent = async (input) => {
        const data = {
            'zipcode': input
        }

        const result = await axios.post(`${url}/api/searchEvents`, data);

        // console.log(await result.data);
        return result.data;
    }

    getAllEvents = async () => {
        const result = await axios.get(`${url}/api/allEvents`);

        return result.data._embedded.events;
    }
}

export default new LoadEventCollections();