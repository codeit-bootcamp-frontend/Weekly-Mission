import axios from "axios";

const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export const getFolders = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/sample/folder`);
    return response.data;
  } catch (error) {
    console.error(`getFolders error: ${error}`);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/sample/user`);
    return response.data;
  } catch (error) {
    console.error(`getUsers error: ${error}`);
    throw error;
  }
};
