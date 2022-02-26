import React from 'react';
import {UserData} from "./useUsersApi.hook";
import {TableCell} from "@mui/material";

interface Props {
    data: UserData
}

const User = ({data}: Props) => {
    return <>
        <TableCell>{data.id}</TableCell>
        <TableCell>{data.name}</TableCell>
        <TableCell>{data.username}</TableCell>
        <TableCell>{data.email}</TableCell>
        <TableCell>{`${data.address.street} ${data.address.suite}, ${data.address.city} ${data.address.zipcode}`}</TableCell>
        <TableCell>{data.phone}</TableCell>
        <TableCell>{data.website}</TableCell>
        <TableCell>{`${data.company.name} ${data.company.catchPhrase}, ${data.company.bs}`}</TableCell>
    </>
}

export default User