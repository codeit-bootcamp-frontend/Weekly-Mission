export default async function getUserData() {
  const res = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");

  if (!res.ok) {
    throw new Error("Failed to user data fetch");
  }

  return res.json();
}
