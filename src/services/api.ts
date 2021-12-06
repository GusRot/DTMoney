import axios from "axios";

// production url: "http://192.168.0.16:8080/api"
// production vercel url: "https://dt-money-ch432zwtn-gusrot.vercel.app/"
// dev url: "http://localhost:3000/api"

export const api = axios.create({
    baseURL: "https://dt-money-ch432zwtn-gusrot.vercel.app/",
});
