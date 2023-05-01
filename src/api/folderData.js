async function getFolderData() {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
    const { data } = await response.json();
    return data;
  } catch {
    console.log("잘못된 url이거나 json 데이터가 아닙니다.");
    throw new Error("fetch error - folder");
  }
}

export default getFolderData;
