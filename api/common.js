export async function getFolderData() {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
  const { data } = await response.json();
  const { folder } = data;
  return folder;
}

export async function getUserData() {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
  const { data } = await response.json();
  return data;
}

