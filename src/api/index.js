const API_BASE_URL = "https://bootcamp-api.codeit.kr/api";

export async function getUserData() {
  const response = await fetch(`${API_BASE_URL}/sample/user`);
  if (!response.ok) {
    throw new Error("Fail get user data");
  }
  const { data } = await response.json();
  return data;
}

export async function getFolderData() {
  const response = await fetch(`${API_BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error("Fail get folder data");
  }
  const { data } = await response.json();
  const { folder } = data;
  return folder;
}
