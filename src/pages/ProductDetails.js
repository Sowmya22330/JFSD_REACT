import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id, 10));

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Material: {product.material}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductDetails;
