import React, { useEffect, useReducer, useState } from 'react';
import "./products.css";
import items from "./data";
import ProductCard from "./productCard";
import Filters from "./filters";

import CartReducer, { CartActionTypes } from "../../reducers/CartReducer";

const Products = () => {

    const initCart = () => {
          const savedCart = localStorage.getItem("cart");
          return savedCart ? JSON.parse(savedCart) : [];
    };

    const [cart, dispatch] = useReducer(CartReducer, [], initCart);

    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [onlySale, setOnlySale] = useState(false);
    const [sortBy, setSortBy] = useState('default');

    const [isCartOpen, setIsCartOpen] = useState(false);

    

    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const handleAddToCart = (id) => {
        const product = items.find(item => item.id === id);

        dispatch({
            type: CartActionTypes.ADD_TO_CART,
            payload: product
        });
    };

    const removeFromCart = (id) => {
        dispatch({
            type: CartActionTypes.REMOVE_FROM_CART,
            payload: id
        });
    };

    const changeQuantity = (id, quantity) => {

        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }

        dispatch({
            type: CartActionTypes.CHANGE_QUANTITY,
            payload: {
                id,
                quantity
            }
        });
    };

    const filteredItems = items.filter((item) => {

        if (minPrice !== '' && item.price < Number(minPrice)) {
            return false;
        }

        if (maxPrice !== '' && item.price > Number(maxPrice)) {
            return false;
        }

        if (onlySale && (!item.badges || !item.badges.includes('sale'))) {
            return false;
        }

        return true;
    });

    const sortedItems = [...filteredItems].sort((a, b) => {

        if (sortBy === 'low-to-high') {
            return a.price - b.price;
        }

        if (sortBy === 'high-to-low') {
            return b.price - a.price;
        }

        return 0;
    });

    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    return (
        <div className="products">

            <div className="cart-info">
                <button
                    className="cart-btn"
                    onClick={() => setIsCartOpen(true)}
                >
                    🛒 Кошик ({totalItems})
                </button>
            </div>

            <div className="filters">
                <Filters
                    minPrice={minPrice}
                    setMinPrice={setMinPrice}
                    maxPrice={maxPrice}
                    setMaxPrice={setMaxPrice}
                    onlySale={onlySale}
                    setOnlySale={setOnlySale}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                />
            </div>

            <div className="products-list">
                {sortedItems.map((item) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        oldPrice={item.oldPrice}
                        currency={item.currency}
                        image={item.image}
                        rating={item.rating}
                        inStock={item.inStock}
                        discount={item.discount}
                        badges={item.badges}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>

            {sortedItems.length === 0 &&
                <p>Товарів не знайдено за такими критеріями.</p>
            }

            {isCartOpen && (
                <div className="modal-overlay">
                    <div className="modal">

                        <h2>Кошик</h2>

                        {cart.length === 0 && (
                            <p>Кошик порожній</p>
                        )}

                        {cart.map(item => (
                            <div key={item.id} className="cart-item">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    width="80"
                                />

                                <div>
                                    <h3>{item.title}</h3>

                                    <p>
                                        {item.price}
                                        {item.currency}
                                    </p>

                                    <div className="quantity-block">

                                        <button
                                            onClick={() =>
                                                changeQuantity(
                                                    item.id,
                                                    item.quantity - 1
                                                )
                                            }
                                        >
                                            -
                                        </button>

                                        <span>
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                changeQuantity(
                                                    item.id,
                                                    item.quantity + 1
                                                )
                                            }
                                        >
                                            +
                                        </button>

                                    </div>

                                    <button
                                        onClick={() =>
                                            removeFromCart(item.id)
                                        }
                                    >
                                        Видалити
                                    </button>

                                </div>

                            </div>
                        ))}

                        <button
                            className="close-btn"
                            onClick={() => setIsCartOpen(false)}
                        >
                            Закрити
                        </button>

                    </div>
                </div>
            )}

        </div>
    );
};

export default Products;