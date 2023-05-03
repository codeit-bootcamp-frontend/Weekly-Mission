const getFolderData = async () => {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  const { data } = await response.json();
  const { folder } = data;
  return folder;
};

export default getFolderData;
