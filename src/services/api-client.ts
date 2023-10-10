import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '44bc551159884976b0d26281761bec01'
  }
}) 