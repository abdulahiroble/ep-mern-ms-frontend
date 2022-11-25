import axios from "axios";

let url;
if (process.env.Node_env !== 'production') {
    url = process.env.REACT_APP_DEVELOPMENT_URL;
}

class LoadUserCollection {
    authenticateUser = async (data) => {

        const result = await axios.post(`${url}/api/login`, data)
        console.log("RESULT=====", result)

        return result;
    }

}

export default new LoadUserCollection();