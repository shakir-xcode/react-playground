import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);


    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                setLoading(false);
                setError('Failed to fetch data');
            }
            const res = await response.json();
            if (!res || Object.keys(res).length === 0) {
                setLoading(false);
                setError('No data found');
                return;
            }

            setData(res);
            setLoading(false);

        } catch (error) {
            setLoading(false);
            setError(error.message);
            console.error('Failed to fetch data: ', error.message);
        }
    }

    useEffect(() => {
        fetchData();

        return () => {
            setData(null);
            setError(null);
            setLoading(false);
        }
    }, [url])

    return { data, error, loading };
}

export default useFetch;