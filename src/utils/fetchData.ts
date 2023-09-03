const BASE_URL = process.env.BASE_URL;
const SERVER_BASE_URL = process.env.SERVER_BASE_URL;
export const fetchData = async <T>({
  url,
  method = "GET",
  option = "force-cache",
  body,
  side,
}: {
  url: string;
  method?: string;
  option?: RequestCache;
  body?: object;
  side?: string;
}): Promise<T> => {
  const requestOptions: RequestInit = {
    method,
    cache: option,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  };
  const requestURL = side ? SERVER_BASE_URL + url : BASE_URL + url;
  const response = await fetch(requestURL, requestOptions);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }

  if (method === "PUT" || method === "DELETE") {
    return {} as T;
  }

  const responseData = await response.json();
  const data: T = responseData.data;
  return data;
};
