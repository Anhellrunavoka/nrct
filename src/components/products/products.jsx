import React from 'react';
import "./products.css";
import items from "./data";
import ProductCard from "./productCard";


const Products  = () => {
    const handleAddToCart = (id) => {
        alert(`Товар ${items.id} додано в кошик`);
    };
    return (
    <div className="products">
      {items.map((items) => (
        <ProductCard
          key={items.id}
          id={items.id}
          title={items.title}
          price={items.price}
          oldPrice={items.oldPrice}
          currency={items.currency}
          image={items.image}
          rating={items.rating}
          inStock={items.inStock}
          discount={items.discount}
          badges={items.badges}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default Products;