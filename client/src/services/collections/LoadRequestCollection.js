import axios from 'axios';

let url = process.env.REACT_APP_PROD_URL;
if (process.env.REACT_APP_ENVIRONMENT != 'prod') {
    url = process.env.REACT_APP_DEVELOPMENT_URL;
}



class LoadRequestCollection {
    sendRequest = async (data) => {
        const result = await axios.post(`${url}/api/contact`, data)
        // console.log("RESULT=====",result)
        return result;
    }

}

export default new LoadRequestCollection();