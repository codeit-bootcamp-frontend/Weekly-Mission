import instance from "@/api/instance";

const getAllFolders = async (userId: number) => {
  const response = await instance.get(`users/${userId}/folders`);

  return response.data;
};

const getFolder = async (userId: number, folderId: number) => {
  const response = await instance.get(`/users/${userId}/folders/${folderId}`);

  return response.data;
};

export { getAllFolders, getFolder };
