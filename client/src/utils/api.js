import axios from "axios";

export default {
    logIn: (logInData) => {
        return axios.post("/api/login", logInData);
    },

    register: (registerData) => {
        return axios.post("/api/register", registerData);
    },

    logOut: () => {
        return axios.get("/api/logout");
    }

}