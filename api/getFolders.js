export default async function getFolders(userId) {
  try {
    const res = await fetch(`https://bootcamp-api.codeit.kr/api/users/${userId}/folders`);
    if (!res.ok) {
      throw new Error("Failed to user's folder fetch");
    }
    const result = await res.json();
    return result.data;
  } catch {
    throw new Error("fetch Error");
  }
}
