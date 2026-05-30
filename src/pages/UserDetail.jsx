import React from "react";
import { useLoaderData } from "react-router";
const UserDetail = () => {
    const user=useLoaderData();

   
    return (
        <div>
            <div>{user.login}</div>
            <div><img src={user.avatar_url} alt={user.login} /></div>
        </div>
    );
}   
export default UserDetail;