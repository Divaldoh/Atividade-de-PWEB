const ProductCard = ({ name, description, price, image }) => {
  return (
    <div className="productCard">
      <img src={image} alt={name} className="productImage" />
      <h2 className="productName">{name}</h2>
      <p className="productDescription">{description}</p>
      <p className="productPrice">{price}</p>
    </div>
  );
};

export default ProductCard;