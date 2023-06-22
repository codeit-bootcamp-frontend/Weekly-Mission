/* eslint-disable @typescript-eslint/no-unused-vars */
import { getRequest } from "@/utils/api/common";

export const getUserQueryFn = async (userId: number) => {
  const response = await getRequest(`/users/${userId}`);
  return response.data[0];
};

/**
 * 폴더 탭 목록 (페이지 url)
 * - 전체 탭 : /users/1/folders => return map(el => folderId: el.id)
 * - 각 폴더 탭 : /users/1/folders/${folderId}
 *
 * /favorites 페이지의 경우 폴더 목록, 링크 목록 모두 userId(userId == folderId)로 통일
 * - /users/:userId/folders/:userId
 * - /users/:userId/links?folderId=:userId
 */
export const getFoldersQueryFn = async (userId: number) => {
  const response = await getRequest(`/users/1/folders`);
  return response.data;
};
export const getFolderQueryFn = async (userId: number, folderId: number) => {
  const response = await getRequest(`/users/1/folders/${folderId}`);
  return response.data[0];
};

/**
 * 각 폴더에 담겨 있는 링크 목록
 */
export const getLinksQueryFn = async (userId: number) => {
  const response = await getRequest(`/users/1/links`);
  return response.distinctData;
};
export const getLinkQueryFn = async (userId: number, folderId: number) => {
  const response = await getRequest(`/users/1/links?folderId=${folderId}`);
  return response.distinctData;
};
