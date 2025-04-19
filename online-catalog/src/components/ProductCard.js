import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ name, description, price, image }) => {
  return (
    <div className={styles.productCard}>
      <img src={image} alt={name} className={styles.productImage} />
      <h2 className={styles.productName}>{name}</h2>
      <p className={styles.productDescription}>{description}</p>
      <p className={styles.productPrice}>{price}</p>
    </div>
  );
};

export default ProductCard;