import React from 'react';
import './App.css';
import CommentsList from './components/comments/CommentsList';
import UsersList from "./components/users/UsersList";

function App() {
    return (
        <div>
            <CommentsList />
            <UsersList />
        </div>
    );
}

export default App;
