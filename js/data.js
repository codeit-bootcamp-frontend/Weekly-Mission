// 1. 폴더 데이터 가져오기
async function getFolderData() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  const result = await response.text();
  const { data } = await JSON.parse(result);
  const { folder } = data;
  return folder;
}

// 2. 유저 데이터 가져오기
async function getUserData() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  const result = await response.text();
  const { data } = await JSON.parse(result);
  return data;
}

// 3. gnb, card 컴포넌트에 사용될 데이터 내보내기
export { getFolderData, getUserData };
