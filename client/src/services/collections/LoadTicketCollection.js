import axios from 'axios';


// let url = process.env.REACT_APP_DEVELOPMENT_SEARCH_SERVICE_URL;
// if (process.env.REACT_APP_ENVIRONMENT != 'prod') {
//     url = process.env.REACT_APP_DEVELOPMENT_URL;
// }
class LoadTicketCollection {
    getAllTickets = async () => {
        const result = await axios.get(`http://localhost:8080/api/tickets`);

        return result.data
    }

    saveResponse = async (msg, ticketId) => {
        console.log(msg, ticketId)
        const result = await axios.post(`http://localhost:8080/api/tickets`, {
            msg,
            ticketId
        });
        console.log(result.data)
        return result
    }
}

export default new LoadTicketCollection();