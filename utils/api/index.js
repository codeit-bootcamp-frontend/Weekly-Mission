import axios from "axios";

const instance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api",
  timeout: 5000,
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const getUser = async () => {
  const { data } = await instance.request({
    url: `/sample/user`,
  });
  return data ?? {};
};

const getFolder = async () => {
  try {
    const { data } = await instance.request({
      url: `/sample/folder`,
    });
    const { folder } = data;
    return folder ?? {};
  } catch (error) {
    return Promise.reject(error);
  }
};

export { getUser, getFolder };
