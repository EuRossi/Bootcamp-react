import axios from "axios";

const api = axios.create({
    baseURL: "https://642f35ebc26d69edc8789d5b.mockapi.io/"
});

export default api;