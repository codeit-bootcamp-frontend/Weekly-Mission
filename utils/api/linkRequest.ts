import { getRequest } from "@/utils/api/common";

interface ILinksData {
  id: number;
  created_at: string;
  updated_at: null;
  url: string;
  title: string;
  description: string;
  image_source: string;
}

/**
 * 각 폴더에 담겨 있는 링크 목록
 */
export const getLinks = async (userId: number): Promise<ILinksData[]> => {
  const response = await getRequest(`/users/${userId}/links`);
  return response.distinctData;
};
export const getLink = async (
  userId: number,
  folderId: number
): Promise<ILinksData[]> => {
  const response = await getRequest(
    `/users/${userId}/links?folderId=${folderId}`
  );
  return response.distinctData;
};
