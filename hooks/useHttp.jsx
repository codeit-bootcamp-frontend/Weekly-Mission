import axios from "axios";
import { useState, useCallback, useEffect } from "react";

const useHttp = ({ url, method, headers, data }) => {
  const [isLoading, setIsLoadng] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState([]);

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

      if (!response.ok) {
        throw new Error("Request Failed!");
      }
    } catch (error) {
      setError(error.message);
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
