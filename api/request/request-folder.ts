import instance from "@/api/instance";

const getUserAllFolders = async (userId: number) => {
  const response = await instance.get(`users/${userId}/folders`);

  return response.data.data;
};

const getUserFolder = async (userId: number, folderId: number) => {
  const response = await instance.get(`/users/${userId}/folders/${folderId}`);

  return response.data.data;
};

const getAllFolders = async () => {
  const respone = await instance.get("/folders");

  return respone.data.data;
};

const getFolder = async (folderId: number) => {
  const response = await instance.get(`/folders/${folderId}`);

  return response.data.data;
};

const changeFolderName = async (folderId: number, name: string) => {
  const response = await instance.put(`/folders/${folderId}`, { name });

  return response.data;
};

const createFolder = async (name: string) => {
  const response = await instance.post("/folders", { name });

  return response.data;
};

const deleteFolder = async (folderId: number) => {
  const response = await instance.delete(`/folders/${folderId}`);

  return response.data;
};

export { getUserAllFolders, getUserFolder, getAllFolders, getFolder, changeFolderName, createFolder, deleteFolder };
