import axios from 'axios';


let url = process.env.REACT_APP_PRODUCTION_API_URL;
if (process.env.REACT_APP_ENVIRONMENT_PROD == 'false') {
    url = process.env.REACT_APP_DEVELOPMENT_API_URL;
}
console.log(url)
class LoadLogsCollection{
    getLogs = async () => {
        const result = await axios.post(`${url}/logs/login`);
        console.log(result)
        return result
    }
}

export default new LoadLogsCollection();