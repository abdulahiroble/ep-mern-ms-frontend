import axios from "axios";

let url = process.env.REACT_APP_PRODUCTION_AUTH_URL;
if (process.env.REACT_APP_ENVIRONMENT_PROD == "false") {
    console.log("hello?")
    url = process.env.REACT_APP_DEVELOPMENT_AUTH_URL;
}
console.log(process.env.REACT_APP_ENVIRONMENT_PROD != true)

console.log("ADMINURL===",url)
class LoadUserCollection {


    authenticateUser = async (data) => {
        data.key = process.env.REACT_APP_SECRET_KEY;
        console.log("loginData===",data)
        const result = await axios.post(`${url}/login`, data)
        console.log("RESULT=====", result)
        
        return result;
    }

    validateSignin = async (token, userId) => {
        const header = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': token
            },
            body: JSON.stringify({userId:userId})
        }
        const result = await fetch(`${url}/login/verify`, header)
        const data = await result.json();

        
        return data;
    }

    getUserProfile = async (id) => {
        const result = await axios.get(`${url}/users/${id}`)
        return result;
    }

    updateProfile = async (data) => {
        const result = await axios.put(`${url}/user`, data)

        return result;
    }

    registerUser = async (data) => {
        console.log("DATA===",data)
        const result = await axios.post(`${url}/users`, data)
        console.log("RESULT=====", result)

        return result;
    }

    verifyAccount = async (data) => {
        console.log("DATA===",data)
        const result = await axios.get(`${url}/verify/account/${data.token}`)
        console.log("RESULT=====", result)

        return result;
    }

}

export default new LoadUserCollection();