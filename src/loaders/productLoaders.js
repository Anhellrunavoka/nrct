import axios from "axios";
export const getProducts=async() => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
}

export const getProductDetail = async ({params}) => {
    const productId=params.id;
    const response = await axios.get( `https://fakestoreapi.com/products/${productId}`);
    return response.data;
}

export const searchProducts=async({request}) => {
    const url=new URL(request.url);
    const q=url.searchParams.get('q');

    const response = await axios.get(`https://fakestoreapi.com/products/search?q=${q}`);
    return response.data;
}