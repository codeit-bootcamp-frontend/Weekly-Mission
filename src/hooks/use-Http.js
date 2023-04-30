import axios from 'axios';
import React, { useState, useCallback } from 'react';

const useHttp = (applyData) => {
  const [isLoading, setIsLoadng] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (requestConfig) => {
      setIsLoadng(true);
      setError(null);

      try {
        const response = await axios({
          method: requestConfig.method || 'GET',
          url: requestConfig.url,
          headers: requestConfig.headers || {},
          data: JSON.stringify(requestConfig.data) || null,
        });

        const { data } = response.data;

        applyData(data);

        if (!response.ok) {
          throw new Error('Request Failed!');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoadng(false);
      }
    },
    [applyData]
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
