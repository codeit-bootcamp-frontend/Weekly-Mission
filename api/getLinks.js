export default async function getLinks(userId, folderId = "") {
  try {
    const res = await fetch(`https://bootcamp-api.codeit.kr/api/users/${userId}/links?folderId=${folderId}`);
    if (!res.ok) {
      throw new Error("Failed to links fetch");
    }
    const { distinctData } = await res.json();
    return distinctData;
  } catch {
    throw new Error("fetch Error");
  }
}
