import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../services/constants";

const useFetch = ({ url }: { url: string }) => {
  const [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_BASE_URL}/${url}`)
      .then((res) => {
        const data = res.data.data;
        if (Array.isArray(data)) {
          setData(res.data.data);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetch;
