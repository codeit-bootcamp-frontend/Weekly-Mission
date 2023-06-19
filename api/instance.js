import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://bootcamp-api.codeit.kr/api",
  timeout: 10000,
});

async function getUser(userId) {
  try {
    const response = await instance.get(`api/users/${userId}`);
    const { data } = response.data;
    return data[0];
  } catch (error) {
    console.log(error);
  }
}

async function getFolderList(userId) {
  try {
    const response = await instance.get(`api/users/${userId}/folders`);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getCardList(userId, folderId) {
  try {
    const url = folderId
      ? `api/users/${userId}/links?folderId=${folderId}`
      : `api/users/${userId}/links`;

    const response = await instance.get(url);
    return response.data.distinctData;
  } catch (error) {
    console.log(error);
  }
}

export { getUser, getFolderList, getCardList };
