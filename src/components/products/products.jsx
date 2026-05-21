import React,{useState} from 'react';
import "./products.css";
import items from "./data";
import ProductCard from "./productCard";
import Filters from "./filters";

const Products  = () => {

    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [onlySale, setOnlySale] = useState(false);
    const [sortBy, setSortBy] = useState('default');
    const handleAddToCart = (id) => {
        alert(`Товар ${items.id} додано в кошик`);
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
    return (
    <div className="products">
      <div className="filters">
        <Filters 
          minPrice={minPrice} setMinPrice={setMinPrice}
          maxPrice={maxPrice} setMaxPrice={setMaxPrice}
          onlySale={onlySale} setOnlySale={setOnlySale}
          sortBy={sortBy} setSortBy={setSortBy}
        />
      </div>
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
      {sortedItems.length === 0 && <p>Товарів не знайдено за такими критеріями.</p>}
    </div>
  );
}

export default Products;