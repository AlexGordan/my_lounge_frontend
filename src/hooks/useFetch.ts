import { useEffect, useState } from "react";

export const useFetch = (callback: any, dependecies?: Array<any>) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const onCallback = async () => {
      setLoading(true);
      try {
        const data = await callback();
        setResponse(data);
        setLoading(false);
      } catch (e: any) {
        setError(e);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    onCallback();
  }, []);
  return { loading, response, error };
};
