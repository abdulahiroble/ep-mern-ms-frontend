// // The service uses Axios for HTTP requests and Local Storage for user information & JWT.
// // It provides following important functions:

// login(): POST {username, password} & save User Profile to Local Storage
// logout(): POST logout request, remove User Profile from Local Storage
// register(): POST {username, email, password}
// getCurrentUser(): get stored user information


import axios from "axios";

const API_URL = 'http://localhost:3000/api/auth';

const register = (email, password) => {
    return axios.post(API_URL + "signup", {
        email,
        password,
    });
};

const login = (email, password) => {
    return axios
    .post(API_URL + "signin", {

    })
    .then((response) => {
        if (response.data.email) {
            localStorage.setItem("user", JSON.stringify(response.date));
        }

        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem("user");
    return axios.post(API_URL + "signout").then((response) => {
      return response.data;
    });
  };

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  
  const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
  }
  
  export default AuthService;

