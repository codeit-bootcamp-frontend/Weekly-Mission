import BASE_URL from "@/lib/common.api";

const getData = async (url) => {
  const response = await fetch(BASE_URL + url);
  if (!response.ok) {
    throw new Error("데이터를 가져오는 중에 오류가 발생했습니다.");
  }
  const data = await response.json();
  return data;
};

export default getData;
