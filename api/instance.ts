import axios, { AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (process.env.NODE_ENV === "development") {
      const { method, url } = config;
      console.log(`🚀 [API] ${method?.toUpperCase()} ${url} | Request`);
    }

    return config;
  },
  (error: AxiosError | Error): Promise<AxiosError> => Promise.reject(error)
);

instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (process.env.NODE_ENV === "development") {
      const { method, url } = response.config;
      const { status } = response;
      console.log(`🚁 [API] ${method?.toUpperCase()} ${url} | Response ${status}`);
    }

    return response;
  },
  (error: AxiosError | Error): Promise<AxiosError> => {
    if (process.env.NODE_ENV === "development") {
      if (axios.isAxiosError(error)) {
        const { message } = error;
        const { method, url } = error.config;
        const { status, statusText } = error.response;

        console.log(`🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${statusText} | ${message}`);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
