import { Link } from "@/types";

export default async function getLinks(userId: number | string, folderId: number | string = ""): Promise<Link[]> {
  try {
    const res = await fetch(`https://bootcamp-api.codeit.kr/api/users/${userId}/links?folderId=${folderId}`);
    if (!res.ok) {
      throw new Error("Failed to links fetch");
    }
    const result = await res.json();
    return result.distinctData;
  } catch {
    throw new Error("fetch Error");
  }
}
