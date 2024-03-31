import { useEffect, useState } from "react";
export const useFetch = (fetchFunction, params) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const stringParams = params ? new URLSearchParams(params).toString() : "";

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const result = await fetchFunction(params);
                setData(result);
            } catch (_) {
                setError('Ошибка загрузки данных');
            } finally {
                setIsLoading(false);
            }
        })();
    }, [fetchFunction, stringParams]);

    return {data, isLoading, error}
};
