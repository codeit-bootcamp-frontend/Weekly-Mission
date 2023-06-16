import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
  headers: {},
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const getUser = async (id) => {
  const { data } = await instance.request({
    url: `/users/${id}`,
  });
  return data ? data[0] : {};
};

const getFolder = async (userID, folderID) => {
  const url = folderID
    ? `/users/${userID}/folders/${folderID}`
    : `/users/${userID}/folders`;
  const { data } = await instance.request({
    url,
  });
  return data;
};

const getLink = async (userID, folderID) => {
  const url = folderID
    ? `/users/${userID}/links/?folderId=${folderID}`
    : `/users/${userID}/links`;
  const { distinctData: data } = await instance.request({
    url,
  });
  return data;
};

export { getUser, getFolder, getLink };
