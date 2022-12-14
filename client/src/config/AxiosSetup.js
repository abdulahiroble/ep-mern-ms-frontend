import axios from "axios";

const axiosSetting = () => {
    // For GET requests
    axios.interceptors.request.use(
        (req) => {
        // Add configurations here
        return req;
        },
        (err) => {
        return Promise.reject(err);
        }
    );
    
    // For POST requests
    axios.interceptors.response.use(
        (res) => {
        // Add configurations here
        console.log("test")
        if (res.status === 201) {
            console.log('Posted Successfully');
        }
        if (res.status === 401) {
            console.log('Posted Successfully');
        }
        return res;
        },
        (err) => {
            console.log("ERR===",err)
        return Promise.reject(err);
        }
    );
}

export default axiosSetting;