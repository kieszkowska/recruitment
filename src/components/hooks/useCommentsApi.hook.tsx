import {useFetchApiData} from "./fetchApiData.hook";

export interface CommentData {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

export const useCommentsApiHook = (page: number = 1) => {
    return useFetchApiData<CommentData>('https://jsonplaceholder.typicode.com/comments', page);
}