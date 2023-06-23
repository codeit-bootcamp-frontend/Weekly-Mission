import instance from "./instance";
import { Folder } from "./types";

const getFolder = async (userId: number, folderId: number) => {
  const res = await instance.get<never, Folder[]>(
    `users/${userId}/folders/${folderId}`,
  );
  if (res.length === 0) {
    res;
  }
  return res[0];
};

const getFolders = async (userId: number): Promise<Folder[]> => {
  const res = await instance.get<never, Folder[]>(`users/${userId}/folders`);
  if (res.length === 0) {
    return Promise.reject(new Error("폴더가 존재하지 않습니다."));
  }
  return res;
};

const deleteFolder = async (folderId: number) => {
  await instance.delete(`folders/${folderId}`);
};

export { getFolder, getFolders, deleteFolder };
