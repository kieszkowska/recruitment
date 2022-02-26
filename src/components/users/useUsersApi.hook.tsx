import {useEffect, useState } from "react";
import { Data } from "../types/data";

export interface User {
    id: number,
    name: string,
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

export const useUsersApiHook = () => {
    const [result, setResult] = useState<Data<User[]>>({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => setResult({ data: response }))
            .catch(error => setResult({ error }));
    }, []);

    return result;
}