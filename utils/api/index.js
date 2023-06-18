import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://bootcamp-api.codeit.kr/api",
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
  if (!(data.length > 0))
    return Promise.reject(new Error("유저가 존재하지 않습니다."));
  return data[0];
};

const getFolder = async (userID, folderID) => {
  const url = folderID
    ? `/users/${userID}/folders/${folderID}`
    : `/users/${userID}/folders`;
  const { data } = await instance.request({
    url,
  });
  if (!(data.length > 0))
    return Promise.reject(new Error("폴더가 존재하지 않습니다."));
  return folderID ? data[0] : data;
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
