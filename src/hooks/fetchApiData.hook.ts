import {useEffect, useState} from "react";
import {Data} from "../components/types/data";

export const useFetchApiData = <T>(url: string, page: number): Data<Array<T>> => {
    const [data, setData] = useState<T[]>([]);
    const [count, setCount] = useState<number>(0);
    const [error, setError] = useState<number | undefined>(undefined);

    useEffect(() => {
        fetch(`${url}?_page=${page}`)
            .then(response => {
                if (!response.ok) {
                    setError(response.status)
                    return;
                }
                setCount(Number(response.headers.get("x-total-count")))
                return response.json();
            })
            .then(response => setData(response?.length ? response : undefined));
    }, [page]);

    return {
        data,
        count,
        error
    };
}