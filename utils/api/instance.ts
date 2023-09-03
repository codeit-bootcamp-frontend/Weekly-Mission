import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.BASE_URL}/api`,
  headers: {},
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
