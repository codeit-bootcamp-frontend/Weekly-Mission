import instance from "@/api/instance";

const getLinks = async (folderId: number | "" = "") => {
  const response = await instance.get(`/links?folderId=${folderId}`);

  return response.data;
};

const getUserLinks = async (userId: number, folderId: number | "" = "") => {
  const response = await instance.get(`/users/${userId}/links?folderId=${folderId}`);

  return response.data.data;
};

const deleteLink = async (linkId: number) => {
  const response = await instance.delete(`/links/${linkId}`);

  return response.data;
};

const createLink = async (url: string, folderId: number) => {
  const response = await instance.post("/links", { url, folderId });

  return response.data;
};

export { getLinks, getUserLinks, deleteLink, createLink };
