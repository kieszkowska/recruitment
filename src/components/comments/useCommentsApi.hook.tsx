import {useEffect, useState } from "react";
import { Data } from "../types/data";

export interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

export const useCommentsApiHook = () => {
    const [result, setResult] = useState<Data<Comment[]>>({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(response => setResult({ data: response }))
            .catch(error => setResult({ error }));
    }, []);

    return result;
}