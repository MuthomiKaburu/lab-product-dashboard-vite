import React from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={product.inStock ? styles.card : `${styles.card} ${styles.outOfStock}`}>
      {product.inStock ? <p>in stock</p> : <p>out of stock</p>}
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>

      
    </div>
  );
};

export default ProductCard;
