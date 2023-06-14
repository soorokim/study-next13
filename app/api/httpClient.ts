import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const httpClient = axios.create({
  baseURL: "https://pro-api.coinmarketcap.com",
  headers: {
    "X-CMC_PRO_API_KEY": apiKey,
  },
});

export default httpClient;
