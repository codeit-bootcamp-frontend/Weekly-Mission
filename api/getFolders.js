export default async function getFolders(userId, folderId = "") {
  try {
    const res = await fetch(`https://bootcamp-api.codeit.kr/api/users/${userId}/folders/${folderId}`);
    if (!res.ok) {
      throw new Error("Failed to user's folder fetch");
    }
    const result = await res.json();
    return result.data;
  } catch {
    throw new Error("fetch Error");
  }
}
