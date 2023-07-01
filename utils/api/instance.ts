import axios from "axios";

import { CustomInstance } from "./types";

const instance: CustomInstance = axios.create({
  baseURL:
    typeof window === "undefined"
      ? "https://bootcamp-api.codeit.kr/api"
      : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
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
