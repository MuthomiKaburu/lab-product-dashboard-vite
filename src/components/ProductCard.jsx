import React from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product, onRemove }) => {
  return (
    <div
      className={
        product.inStock
          ? styles.card
          : `${styles.card} ${styles.outOfStock} outOfStockClass`
      }
    >
      {product.inStock ? <p>in stock</p> : <p>out of stock</p>}

      <h2>{product.name}</h2>
      <h3>{product.price}</h3>

      <button onClick={() => onRemove(product.id)}>
        Remove
      </button>
    </div>
  );
};

export default ProductCard;
