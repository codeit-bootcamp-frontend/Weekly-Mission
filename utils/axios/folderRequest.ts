import { IFolder } from "@/types/linkbrary";
import { getRequest } from "@/utils/axios/common";

/**
 * 폴더 탭 목록 (페이지 url)
 * - 전체 탭 : /users/1/folders => return map(el => folderId: el.id)
 * - 각 폴더 탭 : /users/1/folders/${folderId}
 *
 * /favorites 페이지의 경우 폴더 목록, 링크 목록 모두 userId(userId == folderId)로 통일
 * - /users/:userId/folders/:userId
 * - /users/:userId/links?folderId=:userId
 */
export const getFolders = async (userId: number): Promise<IFolder[]> => {
  const response = await getRequest(`/users/${userId}/folders`);
  return response.data;
};
export const getFolder = async (
  userId: number,
  folderId: number
): Promise<IFolder> => {
  const response = await getRequest(`/users/${userId}/folders/${folderId}`);
  return response.data[0];
};
