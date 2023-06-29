import instance from "./instance";
import { Link } from "./types";

const getLinks = async (userId: number, folderId?: number): Promise<Link[]> => {
  const url = folderId
    ? `users/${userId}/links/?folderId=${folderId}`
    : `users/${userId}/links`;
  const res = await instance.get<never, Link[]>(url);
  return res;
};

const deleteLink = async (linkId: number) => {
  await instance.delete(`links/${linkId}`);
};

const postLink = async (
  url: string,
  userId: number,
  folderId: number | null,
) => {
  try {
    const res = await instance.post<never, Link[]>("links", {
      url,
      userId,
      folderId,
    });
    return res[0];
  } catch {
    alert("링크 추가에 실패했습니다. 링크를 다시 확인해주세요.");
  }
};

export { getLinks, deleteLink, postLink };
