
import React, {  useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router";
const Users = () => {
    const users=useLoaderData();
    const[queryParams,setQueryParams]=useSearchParams();
    const [searchText, setSearchText] = useState(queryParams.get('q')||'');

    const handleSearch=(e) => {
        setSearchText(e.target.value);
        setQueryParams({q:e.target.value})
    }
    const filterUser=(user) => {
      return  searchText.trim()===''? true:user.login.toLowerCase().includes(searchText.toLowerCase());
    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-green-600'>User</h1>
            <input type="text" value={searchText} onChange={handleSearch} className="border"/>
                {users.filter(filterUser).map((user) => (<div key={user.id}>
                    <Link to={`/users/${user.login}`} className="text-blue-500 hover:underline">
                        {user.login}
                    </Link>
                </div>))}
        </div>
    );
}   
export default Users;