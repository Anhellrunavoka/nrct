import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users",
            );
            setUsers(response.data);
        };
        getUser();
    }, []);
    
    return (
        <div>
            <h1 className='text-3xl font-bold text-green-600'>User</h1>
                {users.map((user) => (<div key={user.id}>
                    <Link to={`/users/${user.id}`} className="text-blue-500 hover:underline">
                        {user.name}
                    </Link>
                </div>))}
        </div>
    );
}   
export default Users;