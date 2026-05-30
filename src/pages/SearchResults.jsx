import React from 'react';
import { useLoaderData } from 'react-router';

const SearchResults = () => {
    const results = useLoaderData();
    return (
        <div>
            {/* {results.items.map(user => (
                <div key={user.id}>
                    <h2>{user.login}</h2>
                </div>
            ))} */}
            {results.items.map(([product]) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                </div>
            ))}
        </div>
    );
}

export default SearchResults;

