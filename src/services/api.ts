import axios from "axios";

// production url: "http://192.168.0.16:8080/api"
// production vercel url: "dt-money-one.vercel.app/api"
// dev url: "http://localhost:3000/api"

export const api = axios.create({
    baseURL: "dt-money-one.vercel.app/api",
});
