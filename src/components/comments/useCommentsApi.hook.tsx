import {useEffect, useState } from "react";
import { Data } from "../types/data";

export interface CommentData {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

export const useCommentsApiHook = (page: number = 1) => {
    const [result, setResult] = useState<Data<CommentData[]>>({});
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}`)
            .then(response => {
                setCount(Number(response.headers.get("x-total-count")))
                return response.json();
            })
            .then(response => setResult({ data: response }))
            .catch(error => setResult({ error }));
    }, [page]);

    return {
        ...result,
        count
    };
}