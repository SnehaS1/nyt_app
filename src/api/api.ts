import axios from "axios";

// const apiKey = process.env.VITE_NYT_API_KEY;
const apiKey = import.meta.env.VITE_NYT_API_KEY;

const api = axios.create({
  baseURL: "https://api.nytimes.com/svc/mostpopular/v2",
  params: {
    "api-key": apiKey,
  },
});

export default api;
