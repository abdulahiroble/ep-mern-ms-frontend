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

        // console.log(await result.data);
        return result.data._embedded
    }

    getAllEvents = async () => {
        const result = await axios.get(`${url}/api/allEvents`);

        console.log(result.data.page.number)
        console.log(result.data)

        return result
    }
}

export default new LoadEventCollections();