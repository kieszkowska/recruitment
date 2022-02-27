import {Box} from '@mui/material';
import React from 'react';
import CommentsList from './components/comments/CommentsList';
import UsersList from "./components/users/UsersList";

function App() {
    return (
        <>
            <Box sx={{ m: "2rem" }}>
                <CommentsList />
            </Box>
            <Box sx={{ m: "2rem" }}>
                <UsersList />
            </Box>
        </>
    );
}

export default App;
