import axios from "axios";

import { Folder, Link, User } from "./types";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://weekly-mission-git-ian-react-week14-codeit-bootcamp.vercel.app",
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

const getUser = async (id: number): Promise<User> => {
  const { data } = await instance.get<never, { data: User[] }>(`/users/${id}`);
  if (data.length === 0)
    return Promise.reject(new Error("유저가 존재하지 않습니다."));
  return data[0];
};

const getFolders = async (userID: number): Promise<Folder[]> => {
  const { data } = await instance.get<never, { data: Folder[] }>(
    `users/${userID}/folders`,
  );
  if (data.length === 0) {
    return Promise.reject(new Error("폴더가 존재하지 않습니다."));
  }
  return data;
};

const getFolder = async (userID: number, folderID: number): Promise<Folder> => {
  const { data } = await instance.get<never, { data: Folder[] }>(
    `users/${userID}/folders/${folderID}`,
  );
  if (data.length === 0) {
    return Promise.reject(new Error("폴더가 존재하지 않습니다."));
  }
  return data[0];
};

const getLink = async (userID: number, folderID?: number): Promise<Link[]> => {
  const url = folderID
    ? `users/${userID}/links/?folderId=${folderID}`
    : `users/${userID}/links`;

  // 위에서 instance가 response.data로 처리하는데 인식 못하는 것 같음
  const { distinctData } = await instance.get<never, { distinctData: Link[] }>(
    url,
  );
  return distinctData;
};

export { getUser, getFolder, getFolders, getLink };
