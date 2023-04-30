import axios from "axios";

const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getFolders() {
  try {
    const response = await axios.get(`${BASE_URL}/sample/folder`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUsers() {
  try {
    const response = await axios.get(`${BASE_URL}/sample/user`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
