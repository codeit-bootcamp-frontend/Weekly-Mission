import instance from "./instance";
import { Link } from "./types";

const getLinks = async (userId: string, folderId?: string): Promise<Link[]> => {
  const url = folderId
    ? `users/${userId}/links/?folderId=${folderId}`
    : `users/${userId}/links`;
  const res = await instance.get<never, Link[]>(url);
  return res;
};

const deleteLink = async (linkId: string, folderId?: string) => {
  const url = folderId
    ? `links/${linkId}?folderId=${folderId}`
    : `links/${linkId}`;
  await instance.delete(url);
};

const postLink = async (
  url: string,
  userId: string,
  folderId: string | null,
) => {
  try {
    return await instance.post<never, Link>("links", {
      url,
      userId,
      folderId,
    });
  } catch {
    alert("링크 추가에 실패했습니다. 링크를 다시 확인해주세요.");
  }
};

export { getLinks, deleteLink, postLink };
