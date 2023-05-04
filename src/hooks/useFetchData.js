import { useState, useEffect } from "react";
const BASE_URL = import.meta.env.VITE_BASE_URL;

function useFetchData(url) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}${url}`);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetchData;
