import axios from "axios";

import { Folder, Link, User, CustomInstance } from "./types";

const instance: CustomInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : // 서버 URL
        "https://weekly-mission-git-ian-react-week14-codeit-bootcamp.vercel.app",
  timeout: 5000,
  headers: {},
});

instance.interceptors.response.use(
  (response) => {
    return response.data.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const getUser = async (id: number): Promise<User> => {
  const res = await instance.get<never, User[]>(`/users/${id}`);
  if (res.length === 0)
    return Promise.reject(new Error("유저가 존재하지 않습니다."));
  return res[0];
};

const getFolders = async (userId: number): Promise<Folder[]> => {
  const res = await instance.get<never, Folder[]>(`users/${userId}/folders`);
  if (res.length === 0) {
    return Promise.reject(new Error("폴더가 존재하지 않습니다."));
  }
  return res;
};

const getFolder = async (userId: number, folderId: number) => {
  const res = await instance.get<never, Folder[]>(
    `users/${userId}/folders/${folderId}`,
  );
  if (res.length === 0) {
    res;
  }
  return res[0];
};

const getLinks = async (userId: number, folderId?: number): Promise<Link[]> => {
  const url = folderId
    ? `users/${userId}/links/?folderId=${folderId}`
    : `users/${userId}/links`;

  const res = await instance.get<never, Link[]>(url);
  return res;
};

export { getUser, getFolder, getFolders, getLinks };
