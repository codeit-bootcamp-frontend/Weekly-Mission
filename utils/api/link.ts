import instance from "./instance";
import { Link } from "./types";

const getLinks = async (userId: number, folderId: number): Promise<Link[]> => {
  const url = folderId
    ? `users/${userId}/links/?folderId=${folderId}`
    : `users/${userId}/links`;
  const res = await instance.get<never, Link[]>(url);
  return res;
};

const deleteLink = async (linkId: number) => {
  await instance.delete(`links/${linkId}`);
};

export { getLinks, deleteLink };
