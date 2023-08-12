import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestData, databaseData) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(requestData.url, {
        method: requestData.method ? requestData.method : "GET",
        //headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestData.body ? JSON.stringify(requestData.body) : null,
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      databaseData(responseData);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
