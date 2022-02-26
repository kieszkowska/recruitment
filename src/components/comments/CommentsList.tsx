import React, {useState} from 'react';
import {useCommentsApiHook} from "./useCommentsApi.hook";
import Comment from "./Comment";
import {Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const CommentsList = () => {
    const [page, setPage] = useState(1)
    const { data, error, count } = useCommentsApiHook(page);
    const pageCount = count / 10
    
    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }
    
    if (error) {
        return <div>Error</div>
    }
    
    if (data) {
        return <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Post ID</TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Body</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { data.map(el => (
                            <TableRow key={el.id}>
                                <Comment data={el}/>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                { pageCount > 1 && <Pagination count={pageCount} onChange={handlePageChange} sx={{ m: "10px" }}/>}
            </TableContainer>
        </div>
    }
    
    return <div>Loading</div>;
}

export default CommentsList;
