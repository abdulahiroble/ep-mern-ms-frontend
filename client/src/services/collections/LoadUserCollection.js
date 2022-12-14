import axios from "axios";

let url;
if (process.env.Node_env !== 'production') {
    url = process.env.REACT_APP_DEVELOPMENT_URL;
}

class LoadUserCollection {
    authenticateUser = async (data) => {
        data.key = process.env.REACT_APP_SECRET_KEY;
        console.log(data)
        const result = await axios.post(`${url}/api/login`, data)
        console.log("RESULT=====", result)
        
        return result;
    }

    validateSignin = async (token) => {
        const header = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': token
            }
        }
        const result = await fetch(`${url}/api/login/verify`, header)
        const data = await result.json();

        // console.log("RESULT====",data)
        return data;
    }

    getUserProfile = async (id) => {

        const result = await axios.get(`${url}/api/users/${id}`)
        console.log("RESULT=====", result)

        return result;
    }

    updateProfile = async (data) => {
        console.log("body===",data)
        const result = await axios.put(`${url}/api/user`, data)
        console.log("RESULT=====", result)

        return result;
    }

    registerUser = async (data) => {

        const result = await axios.post(`${url}/api/users`, data)
        console.log("RESULT=====", result)

        return result;
    }

}

export default new LoadUserCollection();