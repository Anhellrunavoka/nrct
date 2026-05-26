import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get(
                "https://fakestoreapi.com/products",
            );
            setProducts(response.data);
        };
        getProducts();
    }, []);
    
    return (
        <div>
            <h1 className='text-3xl font-bold text-green-600'>Products</h1>
                {products.map((product) => (<div key={product.id}>
                    <Link to={`/products/${product.id}`} className="text-blue-500 hover:underline">
                        {product.title}
                    </Link>
                </div>))}
        </div>
    );
}   
export default ProductPage;