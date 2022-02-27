import React, {useState} from 'react';
import {useUsersApiHook} from "../../hooks/useUsersApi.hook";
import {
    LinearProgress,
    Pagination,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import User from './User';
import { PER_PAGE_COUNT } from '../../utils/consts';

const UsersList = () => {
    const [page, setPage] = useState(1)
    const { data, error, count } = useUsersApiHook(page);
    const pageCount = count / PER_PAGE_COUNT

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

    if (error) {
        return <Paper sx={{ p: "20px" }}>Error {error}</Paper>
    }

    if (data?.length) {
        return <div>
            <Typography variant={"h4"}>Users</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Website</TableCell>
                            <TableCell>Company</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { data.map(el => (
                            <TableRow key={el.id}>
                                <User data={el}/>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                { pageCount > 1 && <Pagination count={pageCount} onChange={handlePageChange} sx={{ m: "10px" }}/>}
            </TableContainer>
        </div>
    }

    return <Paper><LinearProgress /></Paper>;
}

export default UsersList
