import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://bootcamp-api.codeit.kr/api",
  timeout: 10000,
});

async function getUser(uid) {
  try {
    const response = await instance.get(`api/users/${uid}`);
    const { data } = response.data;
    return data[0];
  } catch (error) {
    console.log(error);
  }
}

async function getFolderList(uid) {
  try {
    const response = await instance.get(`api/users/${uid}/folders`);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { getUser, getFolderList };
