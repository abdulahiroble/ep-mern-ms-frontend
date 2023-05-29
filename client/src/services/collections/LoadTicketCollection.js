import axios from 'axios';


let url = process.env.REACT_APP_PRODUCTION_API_URL;
if (process.env.REACT_APP_ENVIRONMENT_PROD == "false") {
    console.log("hello?")
    url = process.env.REACT_APP_DEVELOPMENT_API_URL;
}

console.log(process.env.REACT_APP_ENVIRONMENT_PROD != true)

console.log("APIURL===", url)

class LoadTicketCollection {
    getAllTickets = async () => {
        const result = await axios.get(`${url}/tickets`);

        return result.data
    }

    saveResponse = async (msg, ticketId) => {
        console.log(msg, ticketId)
        const result = await axios.post(`${url}/tickets`, {
            msg,
            ticketId
        });
        console.log(result.data)
        return result
    }

    getResponse = async () => {
        const result = await axios.get(`${url}/response`);

        return result.data.relationships
    }
}

export default new LoadTicketCollection();