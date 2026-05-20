import React from "react";

const ProductCard = ({
  id,
  title,
  price,
  oldPrice,
  currency = "₴",
  image,
  rating = 0,
  inStock,
  discount,
  badges = [],
  onAddToCart,
}) => {
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <div className="card">
      <div className="badges">
        {badges.map((badge, index) => (
          <span key={index} className={`badge ${badge}`}>
            {badge}
          </span>
        ))}
      </div>

      <img src={image} alt={title} className="product-image" />

      <h2>{title}</h2>

      <p className="rating">{stars}</p>

      <div className="price-block">
        {(oldPrice || discount) && (
          <span className="old-price">
            {oldPrice}
            {currency}
          </span>
        )}

        <span className="price">
          {price}
          {currency}
        </span>
      </div>

      {discount && <p className="discount">Знижка {discount}%</p>}

      <button
        disabled={!inStock}
        onClick={() => onAddToCart(id)}
        className={inStock ? "btn" : "btn disabled"}
      >
        {inStock ? "В кошик" : "Немає в наявності"}
      </button>
    </div>
  );
};

export default ProductCard;