import React from 'react';
import {useCommentsApiHook} from "./useCommentsApi.hook";

const CommentsList = () => {
    const { data, error } = useCommentsApiHook();
    
    return <div>Comments</div>
}

export default CommentsList;
