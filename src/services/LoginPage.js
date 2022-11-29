import axios from "axios"

//handleSubmit() make a login req email and password values
const handleSubmit = (email, password) => {
    //registered sample user
    const loginPayload = {
        email: 'm@m.dk',
        password: '1234'
    }

    axios.post("http://localhost:3000/api/login", loginPayload)
    .then(response => {
        //get token from reponse
        const token = response.data.token;

        //set JWT token to local
        localStorage.setItem("token", token);

        //set token to axios common header
        setAuthToken(token);

        //redirect user to home page
        window.location.href = '/'
    })

    .catch(err => console.log(err));
};

//Use JWT on each private Req, we had them to req header. 
export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else {
        delete.axios.defaults.headers.common["Authorization"];
    }
}

//check JWT token

const token = localStorage.getItem("token");
if (token) {
    setAuthToken(token);
}