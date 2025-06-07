import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../services/constants";

const useFetch = <T = unknown,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_BASE_URL}/${url}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.response))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
