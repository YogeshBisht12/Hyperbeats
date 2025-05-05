import React from 'react';
import { useCart } from '../pages/CartContext';

const ProductCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="p-4 border rounded">
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>
      <button
        onClick={() => addToCart(item)}
        className="bg-orange-500 text-white px-3 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
