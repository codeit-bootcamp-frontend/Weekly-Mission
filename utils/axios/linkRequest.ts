import { ILink } from "@/types/linkbrary";
import { getRequest, postRequest } from "@/utils/axios/common";

/**
 * 각 폴더에 담겨 있는 링크 목록
 */
export const getLinks = async (userId: number): Promise<ILink[]> => {
  const response = await getRequest(`/users/${userId}/links`);
  return response.data;
};
export const getLink = async (
  userId: number,
  folderId: number
): Promise<ILink[]> => {
  const response = await getRequest(
    `/users/${userId}/links?folderId=${folderId}`
  );
  return response.data;
};

export const createLink = async (
  url: string,
  userId: number,
  folderId?: number
): Promise<ILink[]> => {
  const response = await postRequest(`/links`, {
    url,
    userId,
    folderId,
  });

  return response;
};
