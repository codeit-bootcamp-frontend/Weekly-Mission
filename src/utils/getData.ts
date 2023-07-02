const BASE_URL = process.env.BASE_URL;

export const getData = async <T>(
  url: string,
  option: RequestCache | undefined = "force-cache"
): Promise<T> => {
  const response = await fetch(BASE_URL + url, { cache: option });
  if (!response.ok) {
    throw new Error("데이터를 가져오는 중에 오류가 발생했습니다.");
  }
  const responseData = await response.json();
  const data: T = responseData.data;
  return data;
};
