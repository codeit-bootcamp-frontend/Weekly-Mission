import { getRequest } from "@/utils/api/common";

/**
 * 각 폴더에 담겨 있는 링크 목록
 */
export const getLinks = async (userId: number) => {
  const response = await getRequest(`/users/${userId}/links`);
  return response.distinctData;
};
export const getLink = async (userId: number, folderId: number) => {
  const response = await getRequest(
    `/users/${userId}/links?folderId=${folderId}`
  );
  return response.distinctData;
};
