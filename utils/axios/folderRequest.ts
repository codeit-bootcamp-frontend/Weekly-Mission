import { IFolder } from "@/types/linkbrary";
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "@/utils/axios/common";

/**
 *
 * @param userId 유저id
 * @returns 유저가 가진 모든 폴더 목록
 */
export const getFolders = async (userId: number): Promise<IFolder[]> => {
  const response = await getRequest<IFolder[]>(`/users/${userId}/folders`);
  return response;
};
/**
 *
 * @param userId 유저id
 * @param folderId 폴더id
 * @returns 유저의 특정 폴더 정보
 */
export const getFolder = async (
  userId: number,
  folderId: number
): Promise<IFolder> => {
  const response = await getRequest<IFolder[]>(
    `/users/${userId}/folders/${folderId}`
  );
  return response[0];
};
/**
 *
 * @param folderName 생성하려는 폴더 이름
 * @param userId 유저id
 * @returns 유저가 생성한 폴더 목록
 */
export const createFolder = async (
  folderName: string,
  userId: number
): Promise<IFolder[]> => {
  const response = await postRequest<IFolder[]>(`/folders`, {
    name: folderName,
    userId: userId,
  });

  return response;
};
/**
 *
 * @param folderId 폴더id
 * @returns 삭제 성공 여부
 */
export const deleteFolder = async (folderId: number): Promise<number> => {
  const response = await deleteRequest<string>(`/folders/${folderId}`);
  return response.status; // 삭제 성공시 204 return
};
/**
 *
 * @param folderName 수정하려는 폴더 이름
 * @param folderId 수정하고 싶은 폴더 id
 * @returns 수정 성공 여부
 */
export const editFolderName = async (
  folderName: string,
  folderId: number
): Promise<number> => {
  const response = await putRequest<string>(`/folders/${folderId}`, {
    name: folderName,
  });
  return response.status; // 수정 성공시 204 return
};
