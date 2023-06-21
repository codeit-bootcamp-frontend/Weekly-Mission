import axios, { AxiosRequestConfig } from "axios";
import { useState, useCallback, useEffect } from "react";

interface type {
  url: string;
  method?: string;
  headers?: AxiosRequestConfig["headers"];
  data?: string;
}

const useHttp = ({ url, method, headers, data }: type): any => {
  const [isLoading, setIsLoadng] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<unknown>([]);

  const sendRequest = useCallback(async () => {
    setIsLoadng(true);
    setError(null);

    try {
      const response = await axios({
        url: url,
        method: method || "GET",
        headers: headers || {},
        data: JSON.stringify(data) || null,
      });

      setResponseData(response.data);

      if (response.status < 200 || response.status >= 300) {
        throw new Error("요청이 실패했습니다!");
      }
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoadng(false);
    }
  }, [url, method, headers, data]);

  useEffect(() => {
    sendRequest();
  }, [url, method, headers, data]);

  return {
    isLoading,
    error,
    responseData,
  };
};

export default useHttp;
