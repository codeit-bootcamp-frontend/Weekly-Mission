import { useCallback, useState } from "react";

function useAsync(asyncFunction) {
  const [loading, setPending] = useState(false);
  const [error, setError] = useState(null);

  const callAsyncFunction = useCallback(
    async (...args) => {
      setPending(true);
      setError(null);
      try {
        return await asyncFunction(...args);
      } catch (error) {
        setError(error);
      } finally {
        setPending(false);
      }
    },
    [asyncFunction]
  );

  return { loading, error, callAsyncFunction };
}

export default useAsync;
