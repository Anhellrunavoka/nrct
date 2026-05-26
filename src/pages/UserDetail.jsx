import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
const UserDetail = () => {
    const { id } = useParams();
    const[user,setUser]=useState({});

    useEffect(() => {
        const getUserDetail = async () => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${id}`,
            );
            setUser(response.data);
        };
        getUserDetail();
    }, [id]);
    return (
        <div>
            <h1 className='text-3xl font-bold text-cyan-800'>User Detail</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>City:</strong> {user.address?.city}</p>
        </div>
    );
}   
export default UserDetail;