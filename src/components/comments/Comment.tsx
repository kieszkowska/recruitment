import { TableCell } from '@mui/material';
import React from 'react';
import {CommentData} from "./useCommentsApi.hook";

interface Props {
    data: CommentData
}

const Comment = ({ data }: Props) => {
    return <>
        <TableCell>{data.postId}</TableCell>
        <TableCell>{data.id}</TableCell>
        <TableCell>{data.name}</TableCell>
        <TableCell>{data.email}</TableCell>
        <TableCell>{data.body}</TableCell>
    </>
}

export default Comment