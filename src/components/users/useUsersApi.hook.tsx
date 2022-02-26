import {useEffect, useState } from "react";
import { Data } from "../types/data";

export interface UserData {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lon: string,
        },
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export const useUsersApiHook = (page: number = 1) => {
    const [result, setResult] = useState<Data<UserData[]>>({});
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}`)
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