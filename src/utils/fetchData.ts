const BASE_URL = process.env.BASE_URL;

export const fetchData = async <T>({
  url,
  method = "GET",
  option = "force-cache",
  body,
}: {
  url: string;
  method?: string;
  option?: RequestCache;
  body?: object;
}): Promise<T> => {
  const requestOptions: RequestInit = {
    method,
    cache: option,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(BASE_URL + url, requestOptions);

  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }

  const responseData = await response.json();
  const data: T = responseData.data;
  return data;
};
