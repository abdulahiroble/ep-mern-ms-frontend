import axios from 'axios';


let url = process.env.REACT_APP_DEVELOPMENT_SEARCH_SERVICE_URL;
if (process.env.REACT_APP_ENVIRONMENT != 'prod') {
    url = process.env.REACT_APP_DEVELOPMENT_URL;
}
class LoadTicketCollection {
    getAllTickets = async () => {
        const result = await axios.get(`http://localhost:8080/api/tickets`);

        return result.data
    }
}

export default new LoadTicketCollection();