import { getRequest, postRequest } from "./common";

export const getSampleFolder = async () => {
  const response = await getRequest(`/sample/folder`);
  return response;
};

export const getFolderById = async (userId: string, folderId: string) => {
  const response = await getRequest(`/users/${userId}/folders/${folderId}`);
  return response;
};

export const getLinksByFolderId = async (userId: string, folderId: string) => {
  const response = await getRequest(
    `/users/${userId}/links?folderId=${folderId}`
  );
  return response;
};

export const getFoldersByUserId = async (userId: string) => {
  const response = await getRequest(`/users/${userId}/folders`);
  return response;
};

export const postCreateFolder = async (userId: string, folderName: string) => {
  const response = await postRequest(`/folders`, {
    name: folderName,
    userId: userId,
  });
  return response;
};
