import axios from "axios";

import { CustomInstance } from "./types";

const instance: CustomInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : // CHECK: 서버 URL
        "https://weekly-mission-git-ian-react-week14-codeit-bootcamp.vercel.app",
  timeout: 10000,
  headers: {},
});

instance.interceptors.response.use(
  (response) => {
    return response.data.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
