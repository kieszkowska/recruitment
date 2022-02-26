import React from 'react';
import {useUsersApiHook} from "./useUsersApi.hook";

const UsersList = () => {
    const { data, error } = useUsersApiHook();
    
    return <div>Users</div>
}

export default UsersList
