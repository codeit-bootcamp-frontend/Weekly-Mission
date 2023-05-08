import axios from "axios";

const BASE_URL = "https://taskcomm-api-app.herokuapp.com/api";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error(`getUsers error: ${error}`);
  }
};

export const getPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error(`getPosts error: ${error}`);
  }
};
