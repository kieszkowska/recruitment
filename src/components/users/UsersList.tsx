import React, {useState} from 'react';
import {useUsersApiHook} from "./useUsersApi.hook";
import {Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import User from './User';

const UsersList = () => {
    const [page, setPage] = useState(1)
    const { data, error, count } = useUsersApiHook(page);
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

    return <div>Loading</div>;
}

export default UsersList
