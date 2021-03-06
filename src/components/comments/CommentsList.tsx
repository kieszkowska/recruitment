import React, {useState} from 'react';
import {useCommentsApiHook} from "../../hooks/useCommentsApi.hook";
import Comment from "./Comment";
import {
    LinearProgress,
    Pagination,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@mui/material";
import {PER_PAGE_COUNT} from "../../utils/consts";

const CommentsList = () => {
    const [page, setPage] = useState(1)
    const { data, error, count } = useCommentsApiHook(page);
    const pageCount = count / PER_PAGE_COUNT
    
    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }
    
    if (error) {
        return <Paper sx={{ p: "20px" }}>Error {error}</Paper>
    }

    if (!data) {
        return <Paper><LinearProgress /></Paper>;
    }
    
    if (data && data.length) {
        return <div>
            <Typography variant={"h4"}>Comments</Typography>
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
                            <TableRow key={'comment' + el.id}>
                                <Comment data={el}/>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                { pageCount > 1 && <Pagination count={pageCount} onChange={handlePageChange} sx={{ m: "10px" }}/>}
            </TableContainer>
        </div>
    }

    return <Paper sx={{ p: "20px" }}>No data</Paper>;
}

export default CommentsList;
