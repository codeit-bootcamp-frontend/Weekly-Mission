import { getRequest } from "./common";

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
