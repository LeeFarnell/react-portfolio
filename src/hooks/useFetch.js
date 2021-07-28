import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: axiosData } = await axios.get(url);

        setData(axiosData);
        setLoading(false);
        setError(null);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
        setLoading(false);
        setData(null);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
