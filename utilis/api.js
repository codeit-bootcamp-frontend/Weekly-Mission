import axios from "axios";

const BASE_URL = "https://bootcamp-api.codeit.kr/";

// 단순 get요청으로 인증값이 필요없는 경우
const axiosApi = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

// post, delete등 api요청 시 인증값이 필요한 경우
const axiosAuthApi = (url, options) => {
  const token = "토큰 값";
  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: "Bearer " + token },
    ...options,
  });
  return instance;
};

export const defaultInstance = axiosApi(BASE_URL);
export const authInstance = axiosAuthApi(BASE_URL);
