
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router";

const ITEMS_PER_PAGE = 3;
const ProductPage = () => {
    const products=useLoaderData()|| [];
    const[queryParams,setQueryParams]=useSearchParams();

    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const loaderRef = useRef(null);
    const [searchText, setSearchText] = useState(queryParams.get('q')||'');
    const handleSearch=(e) => {
        setSearchText(e.target.value);
        setQueryParams({q:e.target.value})
        setVisibleCount(ITEMS_PER_PAGE);
    };
    const filteredProducts = useMemo(() => {
        return products.filter((product) =>
            searchText.trim() === '' ? true : product.title.toLowerCase().includes(searchText.toLowerCase())
        );
    }, [products, searchText]);

    const displayedProducts = useMemo(() => {
        return filteredProducts.slice(0, visibleCount);
    }, [filteredProducts, visibleCount]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const target = entries[0];
               
                if (target.isIntersecting && visibleCount < filteredProducts.length) {
                    setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
                }
            },
            { threshold: 1.0 } 
        );
        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [filteredProducts.length, visibleCount]);
    return (
        <div>
            <h1 className='text-3xl font-bold text-green-600'>Products</h1>
            <input type="text" value={searchText} onChange={handleSearch} className="border"/>
                <div className="space-y-2">
                {displayedProducts.map((product) => (
                    <div key={product.id} className="p-2 border-b">
                        <Link to={`/products/${product.id}`} className="text-blue-500 hover:underline text-lg">
                            {product.title}
                        </Link>
                    </div>
                ))}
            </div>



            {visibleCount < filteredProducts.length && (
                <div ref={loaderRef} className="text-center py-4 text-gray-500 font-medium">
                    Завантаження наступних товарів...
                </div>
            )}
        </div>
    );
};
export default ProductPage;