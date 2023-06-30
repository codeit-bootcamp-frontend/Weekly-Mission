import { deleteRequest, getRequest, postRequest } from "@/lib/axios/common";
import { ILink } from "@/types/linkbrary";

/**
 *
 * @param userId 유저id
 * @returns 유저가 가진 모든 링크 목록
 */
export const getLinks = async (userId: number): Promise<ILink[]> => {
  const response = await getRequest<ILink[]>(`/users/${userId}/links`);
  return response;
};
/**
 *
 * @param userId 유저id
 * @param folderId 폴더id
 * @returns 유저가 가진 특정 폴더의 링크 목록
 */
export const getLink = async (
  userId: number,
  folderId: number
): Promise<ILink[]> => {
  const response = await getRequest<ILink[]>(
    `/users/${userId}/links?folderId=${folderId}`
  );
  return response;
};
/**
 *
 * @param url 저장하려는 주소
 * @param userId 유저id
 * @param folderId 폴더id
 * @returns 생성한 링크 정보
 */
export const createLink = async (
  url: string,
  userId: number,
  folderId?: number
): Promise<ILink[]> => {
  const response = await postRequest<ILink[]>(`/links`, {
    url,
    userId,
    folderId,
  });
  return response;
};
/**
 *
 * @param linkId 삭제하려는 링크id
 * @returns 삭제 성공 여부
 */
export const deleteLink = async (linkId: number): Promise<number> => {
  const response = await deleteRequest<string>(`/links/${linkId}`);
  return response.status; // 삭제 성공시 204 return
};
