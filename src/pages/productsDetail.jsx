import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router";
const ProductsDetail = () => {
    const product=useLoaderData();

   
    return (
        <div>
            <h1 className='text-3xl font-bold text-cyan-800'>Product Detail</h1>
            <p><strong>Title:</strong> {product.title}</p>
            <img src={product.image} alt={product.title} />
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Rating:</strong> {product.rating?.rate} ({product.rating?.count} reviews)</p>
            <p><strong>Stock Status:</strong> {product.rating?.count > 0 ? "In Stock" : "Out of Stock"}</p>
        </div>
    );

}   
export default ProductsDetail;