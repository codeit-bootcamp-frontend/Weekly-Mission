export default async function getFolderData() {
  try {
    const res = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
    if (!res.ok) {
      throw new Error("Failed to folder data fetch");
    }
    return res.json();
  } catch {
    throw new Error("fetch Error");
  }
}
