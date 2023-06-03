import { useEffect, useState } from "react";

const useFetchData = (callAsuncFunction) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(await callAsuncFunction());
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [callAsuncFunction]);

  return { data, error, isLoading };
};

export default useFetchData;
