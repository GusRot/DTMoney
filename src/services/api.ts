import axios from "axios";

// production url: "http://192.168.0.16:8080/api"

export const api = axios.create({
    baseURL: "http://localhost:3000/api",
});
