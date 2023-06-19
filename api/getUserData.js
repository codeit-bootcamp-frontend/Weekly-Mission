export default async function getUserData(userId = 3) {
  try {
    const res = await fetch(`https://bootcamp-api.codeit.kr/api/users/${userId}`);

    if (!res.ok) {
      throw new Error("Failed to user data fetch");
    }
    const result = await res.json();
    return result.data;
  } catch {
    throw new Error("fetch Error");
  }
}
