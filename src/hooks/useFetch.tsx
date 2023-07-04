import { useState, useEffect } from "react";

const BASE_URL = process.env.BASE_URL;

const useFetch = <T,>(
  url: string,
  option: RequestCache | undefined = "force-cache"
): T | undefined => {
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL + url, { cache: option });
        const result = await response.json();
        const data = result.data;
        setData(data);
      } catch (error: unknown) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url, option]);

  return data;
};

export default useFetch;
