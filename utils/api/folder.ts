import instance from "./instance";
import { Folder } from "./types";

const getFolder = async (folderId: string) => {
  return await instance.get<never, Folder>(`folders/${folderId}`);
};

const getFolders = async (userId: string): Promise<Folder[]> => {
  return await instance.get<never, Folder[]>(`users/${userId}/folders`);
};

const deleteFolder = async (folderId: string) => {
  await instance.delete(`folders/${folderId}`);
};

const putFolder = async (name: string, folderId: string) => {
  await instance.post(`folders/${folderId}`, {
    name,
  });
};

const postFolder = async (name: string, userId: string) => {
  return await instance.post<never, Folder>("folders", {
    name,
    userId,
  });
};

export { getFolder, getFolders, deleteFolder, putFolder, postFolder };
