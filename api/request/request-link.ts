import instance from "@/api/instance";

const getLinks = async (userId: number, folderId: number | "" = "") => {
  const response = await instance.get(`/users/${userId}/links?folderId=${folderId}`);

  return response.data.data;
};

export { getLinks };
