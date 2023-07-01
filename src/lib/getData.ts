import { BASE_URL } from "@/lib/common.api";

export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(BASE_URL + url);
  if (!response.ok) {
    throw new Error("데이터를 가져오는 중에 오류가 발생했습니다.");
  }
  const responseData = await response.json();
  const data: T = responseData.data[0];
  return data;
};
