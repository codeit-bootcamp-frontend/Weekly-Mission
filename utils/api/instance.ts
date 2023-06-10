import axios from "axios";

export const instance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
  timeout: 2500,
});
